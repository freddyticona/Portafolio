import type { VercelRequest, VercelResponse } from '@vercel/node';
import { put } from '@vercel/blob';
import sharp from 'sharp';

const OPTIMIZABLE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename, contentType, content } = req.body;

    if (!filename || !contentType || !content) {
      return res.status(400).json({
        error: 'Missing required fields: filename, contentType, content'
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
