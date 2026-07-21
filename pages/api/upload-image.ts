import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename, content, contentType, folder } = req.body;

    // VERCEL BLOB - Auto-setup, no config needed
    const formData = new FormData();
    formData.append('file', new Blob([content], { type: contentType }), filename);
    formData.append('folder', folder || 'blog');

    const response = await fetch('https://blob.vercel.fun/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_BLOB_TOKEN}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload to Vercel Blob');
    }

    const data = await response.json();

    return res.status(200).json({
      url: data.url,
      pathname: data.pathname,
      size: data.size,
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
