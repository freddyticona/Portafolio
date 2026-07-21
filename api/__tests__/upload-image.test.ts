import { describe, it, expect, vi } from 'vitest';

vi.mock('@vercel/blob', () => ({
  put: vi.fn().mockResolvedValue({
    url: 'https://store.public.blob.vercel-storage.com/test/img.jpg',
    pathname: 'test/img.jpg',
    contentType: 'image/jpeg',
    contentDisposition: 'inline',
  }),
}));

type MockResponse = {
  _status: number;
  _body: any;
  status: (code: number) => MockResponse;
  json: (data: any) => void;
};

function createMockReq(body: any) {
  return { method: 'POST', body };
}

function createMockRes(): MockResponse {
  const res: MockResponse = { _status: 0, _body: null } as any;
  res.status = function (code: number) {
    this._status = code;
    return this;
  };
  res.json = function (data: any) {
    this._body = data;
  };
  return res;
}

describe('POST /api/upload-image validation', () => {
  it('rejects missing fields with 400', async () => {
    const { default: handler } = await import('../upload-image');
    const req = createMockReq({});
    const res = createMockRes();
    await handler(req as any, res as any);
    expect(res._status).toBe(400);
    expect(res._body.error).toBe('Missing required fields: filename, contentType, content');
  });

  it('rejects invalid content type with 400', async () => {
    const { default: handler } = await import('../upload-image');
    const req = createMockReq({ filename: 'test.txt', contentType: 'text/plain', content: 'aGVsbG8=' });
    const res = createMockRes();
    await handler(req as any, res as any);
    expect(res._status).toBe(400);
    expect(res._body.error).toContain('Invalid content type');
  });

  it('rejects oversized images with 400', async () => {
    const { default: handler } = await import('../upload-image');
    const largeContent = Buffer.alloc(6 * 1024 * 1024).toString('base64');
    const req = createMockReq({ filename: 'test.jpg', contentType: 'image/jpeg', content: largeContent });
    const res = createMockRes();
    await handler(req as any, res as any);
    expect(res._status).toBe(400);
    expect(res._body.error).toContain('too large');
  });

  it('accepts valid image upload and returns URL', async () => {
    const { default: handler } = await import('../upload-image');
    const tinyJpeg = Buffer.from([0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01]).toString('base64');
    const req = createMockReq({ filename: 'test/img.jpg', contentType: 'image/jpeg', content: tinyJpeg });
    const res = createMockRes();
    await handler(req as any, res as any);
    expect(res._status).toBe(200);
    expect(res._body.url).toContain('blob.vercel-storage.com');
    expect(res._body.filename).toBe('test/img.jpg');
    expect(res._body.readyToServe).toBe(true);
  });
});
