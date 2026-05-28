import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const siteUrl = context.site || new URL('https://pink10000.github.io');

  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${new URL(`/blog/${post.id}/`, siteUrl).href}</link>
      <guid isPermaLink="true">${new URL(`/blog/${post.id}/`, siteUrl).href}</guid>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${new Date(post.data.pubDate).toUTCString()}</pubDate>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>kytrinh-portfolio</title>
    <link>${siteUrl}</link>
    <description>A personal website and blog</description>
    <language>en-us</language>
    <atom:link href="${new URL('/rss.xml', siteUrl).href}" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml;charset=UTF-8',
    },
  });
}
