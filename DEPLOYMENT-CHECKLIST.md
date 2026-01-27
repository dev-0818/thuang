# 🚀 Pre-Deployment Checklist

## URLs to Update (IMPORTANT!)

### index.html

- [ ] Line 21: `<link rel="canonical" href="YOUR_DOMAIN_HERE" />`
- [ ] Line 24-30: Update all `og:url` and `og:image` URLs
- [ ] Line 33-36: Update all Twitter card URLs
- [ ] Lines 58-90: Update URLs in JSON-LD structured data

### sitemap.xml

- [ ] Replace `https://www.thuangarchitect.com/` with your domain (3 places)
- [ ] Update `<lastmod>` dates to current date

### robots.txt

- [ ] Update sitemap URL to your domain

## Required Images to Create

- [ ] `public/og-image.jpg` (1200x630px) - for Facebook/LinkedIn sharing
- [ ] `public/twitter-card.jpg` (1200x600px) - for Twitter sharing

## Vite Config

- [ ] If deploying to root: Change `base: '/thuangarch/'` to `base: '/'` in vite.config.ts
- [ ] If deploying to subdirectory: Keep current base or update path

## Build and Test

- [ ] Run `npm run build`
- [ ] Check dist/ folder is created
- [ ] Test locally with `npm run preview`
- [ ] Verify all images load correctly
- [ ] Test contact modal functionality
- [ ] Check responsive design on mobile

## After Deployment

### Search Engines

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt is accessible at yourdomain.com/robots.txt

### Testing Tools

- [ ] Test with PageSpeed Insights
- [ ] Test with Google Mobile-Friendly Test
- [ ] Test structured data with Google Rich Results Test
- [ ] Test Open Graph with Facebook Sharing Debugger
- [ ] Test Twitter Card with Twitter Card Validator

### Social Media

- [ ] Share on Facebook - verify preview looks correct
- [ ] Share on Twitter - verify card displays properly
- [ ] Share on LinkedIn - verify preview

### Analytics (Optional)

- [ ] Set up Google Analytics
- [ ] Set up Google Search Console
- [ ] Configure conversion tracking

## Quick Reference

**Domain to replace:** `https://www.thuangarchitect.com/`
**Your domain:** `_________________________`

**Email:** vaval.va98@gmail.com
**Phone:** +62-853-5982-0664
**WhatsApp:** wa.me/6285359820664

---

✅ All done? Deploy your site and enjoy great SEO! 🎉
