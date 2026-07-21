import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { imageBase64, filename } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    // Usar ImgBB (gratis, sin API key necesaria)
    const formData = new FormData();
    formData.append('key', process.env.IMGBB_API_KEY || '45e199c9e0e3e4e9e9e9e9e9e9e9e9e9');

    // Extra solo el base64 sin el prefijo data:image/...;base64,
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    formData.append('image', base64Data);
    formData.append('name', filename || 'image.jpg');

    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('ImgBB error:', errorText);
      throw new Error('Failed to upload to ImgBB');
    }

    const data = await response.json();

    return res.status(200).json({
      url: data.data.url,
      display_url: data.data.display_url,
      delete_url: data.data.delete_url,
      size: data.data.size,
      readyToServe: true,
    });

  } catch (error) {
    console.error('❌ Upload failed:', error);
    return res.status(500).json({
      error: 'Upload failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
