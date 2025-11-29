# EQUALS3 Website - Quick Deployment Guide

## 🚀 Deploy to Vercel (5 Minutes)

### Method 1: Vercel Web Interface (Easiest)

1. **Push to GitHub**:
   - Create a new repository on GitHub
   - Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your EQUALS3 repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes at `your-project.vercel.app`

### Method 2: Vercel CLI (For Quick Tests)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from your project directory
cd equals3-website
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name? equals3-website
# - Directory? ./
# - Override settings? No

# Your site is now live!
```

## 🌐 Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `equalsthree.co.uk`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)

### DNS Records (for equalsthree.co.uk):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## 📊 Post-Deployment Checklist

- [ ] Test loading animation on mobile
- [ ] Check all navigation links work
- [ ] Verify images load correctly
- [ ] Test contact form (once added)
- [ ] Check SEO meta tags in source
- [ ] Set up Vercel Analytics
- [ ] Configure environment variables (if any)

## 🔧 Environment Variables

If you need environment variables:

1. Create `.env.local` locally (already in .gitignore)
2. In Vercel Dashboard → Settings → Environment Variables
3. Add your variables there for production

## ⚡ Performance Tips

Your site is already optimized, but for even better performance:

1. **Enable Vercel Analytics**:
   - Dashboard → Analytics → Enable
   - Free tier includes 100k events/month

2. **Add Vercel Speed Insights**:
   ```bash
   npm install @vercel/speed-insights
   ```
   
   Add to `app/layout.tsx`:
   ```tsx
   import { SpeedInsights } from '@vercel/speed-insights/next';
   
   // In layout return:
   <body>
     {children}
     <SpeedInsights />
   </body>
   ```

3. **Image Optimization**:
   - Already configured via Next.js Image component
   - Vercel automatically serves WebP/AVIF

## 🐛 Common Issues

**Build fails**: 
- Check Node version is 18+
- Run `npm install` locally first
- Clear Vercel cache in settings

**Fonts not loading**:
- Already using system fonts (-apple-system)
- No external font requests

**Animations not working**:
- Framer Motion is installed
- All components have 'use client' directive

## 📱 Testing

Before going live, test on:
- ✅ Desktop (Chrome, Safari, Firefox)
- ✅ Mobile (iOS Safari, Android Chrome)
- ✅ Tablet (iPad)

Use Vercel preview deployments for testing:
- Every git push creates a preview URL
- Test there before merging to main

## 🎯 Next Steps After Deployment

1. **Set up monitoring**:
   - Vercel Analytics
   - Google Analytics
   - Sentry for error tracking

2. **Configure redirects** (if needed):
   Create `vercel.json`:
   ```json
   {
     "redirects": [
       {
         "source": "/old-page",
         "destination": "/new-page",
         "permanent": true
       }
     ]
   }
   ```

3. **Add more pages**:
   - About page
   - For Clinics detailed page
   - For Suppliers detailed page
   - Case studies
   - Resources/Blog

## 📞 Support

Need help? Contact:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- EQUALS3: team@equalsthree.co.uk

---

Ready to launch! 🚀
