# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Easiest - Recommended)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Update URLs After Deployment**
   - Copy your Vercel URL (e.g., `https://your-portfolio.vercel.app`)
   - Update `src/components/Contact.jsx`:
     ```javascript
     portfolio: "https://your-portfolio.vercel.app";
     ```
   - Commit and push changes
   - Vercel will auto-deploy the update

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"
   - Your site will be live in ~2 minutes!

3. **Update URLs** (same as Vercel)

### Option 3: GitHub Pages

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add to scripts:

   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy**

   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://YOUR_USERNAME.github.io/REPO_NAME`

### Option 4: Render

1. **Push to GitHub**

2. **Create Web Service on Render**
   - Go to [render.com](https://render.com)
   - New → Web Service
   - Connect GitHub repository
   - Settings:
     - Build Command: `npm run build`
     - Start Command: (leave empty for static site)
     - Publish Directory: `dist`
   - Click "Create Web Service"

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [x] Build works: `npm run build` completes successfully
- [x] All images are in `/public/repo_images_bundle/`
- [x] Resume file exists: `/public/Samuel_Kwibe_Resume_Final.docx`
- [x] Profile image exists: `/public/profile.jpg`
- [ ] Test locally: `npm run preview` works
- [ ] All project links are correct
- [ ] Contact form placeholder URLs updated (after deployment)

## 🔧 Post-Deployment Steps

1. **Update Portfolio URL**

   - Edit `src/components/Contact.jsx`
   - Update `portfolio: "YOUR_DEPLOYED_URL"`

2. **Add Calendly Link** (Optional)

   - Edit `src/components/Contact.jsx`
   - Update `calendly: "YOUR_CALENDLY_URL"`

3. **Test Everything**

   - [ ] All pages load correctly
   - [ ] Resume downloads work
   - [ ] All project images display
   - [ ] Navigation works
   - [ ] Contact form works (if backend configured)
   - [ ] Mobile responsive
   - [ ] All external links work

4. **SEO Verification**
   - Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Check meta tags with browser dev tools
   - Verify Open Graph tags with [opengraph.xyz](https://www.opengraph.xyz/)

## 🐛 Troubleshooting

### Build Fails

- Check Node version (should be 16+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for TypeScript errors

### Images Not Loading

- Ensure images are in `/public` folder
- Check image paths in `projects.js` start with `/`
- Verify file names match exactly (case-sensitive)

### 404 Errors on Routes

- Ensure SPA routing is configured (already done in `vercel.json` and `netlify.toml`)
- For GitHub Pages, you may need a custom 404.html

### Resume Download Not Working

- Verify file exists in `/public` folder
- Check file name matches exactly: `Samuel_Kwibe_Resume_Final.docx`
- Ensure links use `/Samuel_Kwibe_Resume_Final.docx` (with leading slash)

## 📊 Performance Tips

- Images are already optimized
- Build output is minified automatically
- Consider adding a CDN for faster global access
- Enable compression on your hosting platform

## 🔒 Security Notes

- No sensitive data in code (good!)
- Contact form needs backend for production (currently client-side only)
- Consider adding rate limiting for contact form

## 📞 Need Help?

If you encounter issues:

1. Check the platform's deployment logs
2. Verify all files are committed to Git
3. Ensure build command works locally first
4. Check platform-specific documentation

---

**Ready to deploy?** Choose your platform and follow the steps above! 🚀

