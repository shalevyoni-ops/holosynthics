import type { APIRoute } from 'astro';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/periodic-table/', priority: '0.9', changefreq: 'monthly' },
  { url: '/research/', priority: '0.9', changefreq: 'monthly' },
  { url: '/blog/', priority: '0.8', changefreq: 'weekly' },
  { url: '/darkfield/', priority: '0.9', changefreq: 'monthly' },
  { url: '/about/', priority: '0.6', changefreq: 'monthly' },
  { url: '/blog/periodic-table-ai-56-elements/', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/why-ai-models-hallucinate-neurons-reveal/', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog/can-you-fix-hallucinating-ai-we-did/', priority: '0.8', changefreq: 'monthly' },
];

const site = 'https://holosynthics.com';
const today = new Date().toISOString().split('T')[0];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${site}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
