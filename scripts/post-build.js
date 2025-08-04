const fs = require('fs');

// 1. sitemap.xml 생성
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>https://maclify.site</loc>
         <lastmod>2025-08-04</lastmod>
         <changefreq>weekly</changefreq>
           <priority>1.00</priority>
         </url>
         <url>
           <loc>https://maclify.site/thumbnail-generator</loc>
           <lastmod>2025-08-04</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.90</priority>
         </url>
       </urlset>`;

fs.writeFileSync('out/sitemap.xml', sitemap);
console.log('sitemap.xml generated!');


// 2. robots.txt 생성 (이 부분이 추가되었습니다)
const robots = `User-agent: *
       Allow: /
  
       Sitemap: https://maclify.site/sitemap.xml`;

fs.writeFileSync('out/robots.txt', robots);
console.log('robots.txt generated!');