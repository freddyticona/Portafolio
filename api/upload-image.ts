import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';
import sharp from 'sharp';
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN || '',
  tracesSampleRate: 0.5,
  environment: process.env.VERCEL_ENV || 'development',
});

const OPTIMIZABLE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_UPLOADS_PER_MINUTE = 10;
const RATE_WINDOW_MS = 60_000;

const ipCounters = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipCounters.get(ip);
  if (!entry || now > entry.resetAt) {
    ipCounters.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_UPLOADS_PER_MINUTE) return false;
  entry.count++;
  return true;
}

function isPathSafe(filename: string): boolean {
  const normalized = filename.replace(/\\/g, '/');
  if (normalized.includes('..')) return false;
  if (normalized.startsWith('/')) return false;
  const blocked = /[<>:"|?*]|\.(exe|dll|bat|sh|cmd|ps1|vbs)$/i;
  return !blocked.test(normalized);
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] as string || req.socket.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many uploads. Try again in a minute.' });
  }

  try {
    const { filename, contentType, content } = req.body;

    if (!filename || !contentType || !content) {
      return res.status(400).json({
        error: 'Missing required fields: filename, contentType, content'
      });
    }

    if (!isPathSafe(filename)) {
      return res.status(400).json({
        error: 'Invalid filename. Path traversal or unsafe characters detected.'
      });
    }

    const validTypes = [...OPTIMIZABLE_TYPES, 'image/gif'];
    if (!validTypes.includes(contentType)) {
      return res.status(400).json({
        error: 'Invalid content type. Only JPEG, PNG, WebP, and GIF are allowed.'
      });
    }

    const maxSize = 5 * 1024 * 1024;
    let buffer = Buffer.from(content, 'base64');
    if (buffer.length > maxSize) {
      return res.status(400).json({
        error: 'Image too large. Maximum size is 5MB.'
      });
    }

    const originalSize = buffer.length;

    if (OPTIMIZABLE_TYPES.includes(contentType)) {
      try {
        buffer = await sharp(buffer)
          .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 85, mozjpeg: true })
          .toBuffer();
      } catch {
        // Si sharp falla, usar el buffer original
      }
    }

    const blob = await put(filename, buffer, {
      access: 'public',
      contentType,
      addRandomSuffix: false,
    });

    return res.status(200).json({
      url: blob.url,
      filename: blob.pathname,
      size: buffer.length,
      originalSize,
      contentType: contentType,
      readyToServe: true,
    });

  } catch (error) {
    console.error('Vercel Blob upload failed:', error);
    return res.status(500).json({
      error: 'Upload failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
