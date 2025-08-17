import { getPayload } from 'payload'
import config from '@/payload.config'
import { getServerSideURL } from '@/utilities/getURL'

export async function GET() {
  const payload = await getPayload({ config })

  const { docs: properties } = await payload.find({
    collection: 'properties',
    where: {
      _status: {
        equals: 'published',
      },
    },
    limit: 1000,
    overrideAccess: false,
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${properties
        .map((property) => {
          return `
            <url>
              <loc>${getServerSideURL()}/properties/${property.slug}</loc>
              <lastmod>${new Date(property.updatedAt).toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `
        })
        .join('')}
    </urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
