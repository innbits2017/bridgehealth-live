const fs = require('fs');
const path = require('path')


/* 
add any new route to this route array first and run script "npm run sitemap" , 
this script will update sitemap.xml file seo.
 */
function generateSitemap() {
  const routes = [
    '/',
    '/contact-us',
    '/blog',
    '/leadership',
    '/team',
    '/corporate-membership-program',
    '/career-form',
    '/our-services',
    '/personal-membership-program',
    '/blog-design',
    '/diet-and-nutrition',
    '/yoga-assessment',
    '/lab-tests',
    '/physio-therapy',
    '/pharmacy',
    '/psychological-health',
    '/ophthalmologist',
    '/dermatology',
    '/doctor-consults',
    '/dental-consults',
    '/fitness-assessment',
    '/nursing-at-home',
    '/comprehensive-health-checks',
    '/elderly-care',
    '/diabetes',
    '/manage-weight',
    '/hyper-tension',
    '/about-us',
    '/career',
    '/faq-page',
    '/experience-centre',
    '/affiliate-partners',
    '/hra-page',
    '/devices-and-technology',
    '/media-and-pr',
    '/terms-of-use',
    '/privacy-policies',
    '/health-risk-assessment',
    '/career-admin',
    '/job-description',
    '/LoginForm',
    '/sidenav',
    '/JobListingForm'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
    <url>
      <loc>https://bridgehealth.in/${route}</loc>
    </url>`;
    })
    .join('')}
</urlset>`;
  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
}

generateSitemap();