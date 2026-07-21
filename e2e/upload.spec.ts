import { test, expect } from '@playwright/test';

test.describe('Image upload flow', () => {
  test('POST /api/upload-image rejects invalid content type', async ({ request }) => {
    const response = await request.post('/api/upload-image', {
      data: { filename: 'test.txt', contentType: 'text/plain', content: 'aGVsbG8=' },
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toContain('Invalid content type');
  });

  test('POST /api/upload-image rejects oversized payload', async ({ request }) => {
    const largeContent = Buffer.alloc(6 * 1024 * 1024).toString('base64');
    const response = await request.post('/api/upload-image', {
      data: { filename: 'test.jpg', contentType: 'image/jpeg', content: largeContent },
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toContain('too large');
  });

  test('POST /api/upload-image rejects path traversal', async ({ request }) => {
    const response = await request.post('/api/upload-image', {
      data: { filename: '../../../etc/passwd', contentType: 'image/jpeg', content: 'dGVzdA==' },
    });
    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toContain('unsafe');
  });
});
