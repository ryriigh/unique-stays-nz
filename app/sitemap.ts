import { MetadataRoute } from 'next';
import stays from '@/data/stays.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://unique-stays-nz.vercel.app';

  const stayUrls = stays.map((stay) => ({
    url: `${baseUrl}/stay/${stay.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...stayUrls,
  ];
}
