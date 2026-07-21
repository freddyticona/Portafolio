import type { VercelRequest, VercelResponse } from '@vercel/node';

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

    // Validar tipo de imagen
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(contentType)) {
      return res.status(400).json({
        error: 'Invalid content type. Only JPEG, PNG, WebP, and GIF are allowed.'
      });
    }

    // Validar tamaño (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    const bufferSize = Buffer.from(content, 'base64').length;
    if (bufferSize > maxSize) {
      return res.status(400).json({
        error: 'Image too large. Maximum size is 5MB.'
      });
    }

    // VERCEL BLOB STORAGE
    const blobUrl = `https://${process.env.VERCEL_BLOB_STORE_NAME || 'freddydev'}.public.blob.vercel-storage.com/${filename}`;

    const response = await fetch(blobUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': contentType,
        'x-api-key': process.env.VERCEL_BLOB_READ_WRITE_KEY || '',
      },
      body: Buffer.from(content, 'base64'),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Vercel Blob error:', errorText);
      throw new Error('Failed to upload to Vercel Blob Storage');
    }

    // Devolver URL pública
    const publicUrl = `https://freddydev.net/${filename}`;

    return res.status(200).json({
      url: publicUrl,
      filename: filename,
      size: bufferSize,
      contentType: contentType,
      readyToServe: true,
    });

  } catch (error) {
    console.error('❌ Vercel Blob upload failed:', error);
    return res.status(500).json({
      error: 'Upload failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
