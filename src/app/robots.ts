import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers — full access
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      },
      // AI crawlers — explicit allow, no delay
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    sitemap: 'https://syedmukheeth.is-a.dev/sitemap.xml',
    host: 'https://syedmukheeth.is-a.dev',
  }
}
