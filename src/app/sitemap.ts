import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://built4you.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...['services', 'vision', 'estimator', 'packages', 'contact', 'compare-packages'].map((route) => ({
      url: `https://built4you.in/${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
