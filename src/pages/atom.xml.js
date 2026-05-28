import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const siteUrl = context.site || new URL('https://pink10000.github.io');

  const items = posts.map((post) => `
    <entry>
      <title><![CDATA[${post.data.title}]]></title>
      <link href="${new URL(`/blog/${post.id}/`, siteUrl).href}"/>
      <id>${new URL(`/blog/${post.id}/`, siteUrl).href}</id>
      <updated>${new Date(post.data.pubDate).toISOString()}</updated>
      <summary><![CDATA[${post.data.description}]]></summary>
    </entry>
  `).join('');

  const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>kytrinh-portfolio</title>
  <subtitle>A personal website and blog</subtitle>
  <link href="${new URL('/atom.xml', siteUrl).href}" rel="self"/>
  <link href="${siteUrl}"/>
  <updated>${new Date().toISOString()}</updated>
  <id>${siteUrl}/</id>
  <author>
    <name>kytrinh</name>
  </author>
  ${items}
</feed>`;

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/atom+xml;charset=UTF-8',
    },
  });
}
