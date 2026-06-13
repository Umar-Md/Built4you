import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://built4you.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://built4you.in/about',
      lastModified: new Date(),
    },
    {
      url: 'https://built4you.in/contact',
      lastModified: new Date(),
    },
  ]
}