import { describe, it, expect } from 'vitest';
import { generateHomeStructuredData } from './structuredData';

describe('generateHomeStructuredData', () => {
  const data = generateHomeStructuredData() as any;

  it('returns a valid schema object with @graph', () => {
    expect(data['@context']).toBe('https://schema.org');
    expect(Array.isArray(data['@graph'])).toBe(true);
    expect(data['@graph'].length).toBeGreaterThan(0);
  });

  it('includes LocalBusiness schema with La Paz location', () => {
    const business = data['@graph'].find((item: any) => item['@type'] === 'LocalBusiness');
    expect(business).toBeDefined();
    expect(business.address.addressLocality).toBe('La Paz');
    expect(business.address.addressCountry).toBe('BO');
  });

  it('includes Person schema with correct name', () => {
    const person = data['@graph'].find((item: any) => item['@type'] === 'Person');
    expect(person).toBeDefined();
    expect(person.name).toBe('Freddy Ticona Guzmán');
  });

  it('includes VideoObject schema', () => {
    const video = data['@graph'].find((item: any) => item['@type'] === 'VideoObject');
    expect(video).toBeDefined();
    expect(video.contentUrl).toContain('youtube.com');
  });
});
