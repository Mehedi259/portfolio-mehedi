# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Using Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Premium portfolio website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Method 2: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **For production:**
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need to add environment variables:

1. Create `.env.local` file (already in .gitignore)
2. Add your variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_EMAIL=your-email@example.com
   ```

3. In Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add each variable

## Custom Domain

1. In Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Performance Optimization

The site is already optimized with:
- ✅ Next.js 15+ App Router
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minification
- ✅ Compression

## Post-Deployment Checklist

- [ ] Test all sections and animations
- [ ] Verify mobile responsiveness
- [ ] Check all links (GitHub, LinkedIn, etc.)
- [ ] Update contact information
- [ ] Test contact forms/buttons
- [ ] Run Lighthouse audit (target: 95+)
- [ ] Test on multiple browsers
- [ ] Verify SEO metadata
- [ ] Check social media previews

## Monitoring

Vercel provides:
- Analytics
- Performance metrics
- Error tracking
- Deployment logs

Access these in your Vercel Dashboard.

## Troubleshooting

### Build Fails
- Check build logs in Vercel
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Slow Performance
- Check Vercel Analytics
- Optimize images
- Review bundle size

### 404 Errors
- Verify all routes in app directory
- Check file naming conventions

## Support

For issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create an issue in your repo
