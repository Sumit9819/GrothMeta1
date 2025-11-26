# Vercel Deployment Guide

## ✅ GitHub Setup Complete

Your code is now on GitHub: [https://github.com/Sumit9819/GrothMeta1](https://github.com/Sumit9819/GrothMeta1)

## Deploy to Vercel

### Step 1: Sign Up / Log In

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository

1. Click "Add New Project" or "Import Project"
2. Find and select `GrothMeta1` from your repository list
3. Click "Import"

### Step 3: Configure Project

Vercel will auto-detect most settings, but verify:

**Framework Preset**: Vite ✓ (should auto-detect)

**Build Command**: `npm run build` ✓

**Output Directory**: `dist` ✓

**Install Command**: `npm install` ✓

### Step 4: Add Environment Variables

In the "Environment Variables" section, add:

| Name | Value |
|------|-------|
| `VITE_SANITY_PROJECT_ID` | `jnbuqo69` |
| `VITE_SANITY_DATASET` | `production` |

Click the **"Add"** button after each variable.

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes for the build to complete
3. You'll get a URL like `https://your-project.vercel.app`

## Post-Deployment Steps

### 1. Update Sanity CORS

Your website is now live! But Sanity needs to know the new domain:

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to **API** → **CORS Origins**
4. Click **Add Origin**
5. Enter your Vercel URL (e.g., `https://your-project.vercel.app`)
6. Check **"Allow credentials"**
7. Click **Save**

### 2. Update Sitemap & Robots.txt

In your code, replace `yourdomain.com` with your actual Vercel domain:

- `public/sitemap.xml` (line 2)
- `public/robots.txt` (line 6)

Then:
```bash
git add public/sitemap.xml public/robots.txt
git commit -m "Update domain in SEO files"
git push
```

Vercel will auto-deploy the update!

### 3. Custom Domain (Optional)

To use your own domain:
1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

**Build fails?**
- Check the build logs in Vercel
- Make sure environment variables are set correctly

**Blank page?**
- Check browser console for errors
- Verify Sanity CORS is configured

**Blog not loading?**
- Add content in Sanity Studio
- Or wait for the fallback data to display

## Success!

Your website is now live! 🎉

- **Production URL**: Check Vercel dashboard
- **Studio**: Still local at `http://localhost:3333`
- **Updates**: Push to GitHub → Vercel auto-deploys
