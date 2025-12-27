# Pilze - Vercel Deployment Guide

## Prerequisites

1. **GitHub Account** - You'll need a GitHub account to connect with Vercel
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (you can use your GitHub account)
3. **Git Installed** - Make sure Git is installed on your system

## Step 1: Prepare Your Project for Git

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd /home/bacancy/Desktop/Test/nikhil/pilze
   git init
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `pilze` or any name you prefer
   - Don't initialize with README (since you already have code)

3. **Add and Commit Your Code**:
   ```bash
   git add .
   git commit -m "Initial commit: Pilze functional drinks website"
   ```

4. **Link to GitHub and Push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/pilze.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" or "Log In"
   - Sign in with your GitHub account

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select your `pilze` repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: Leave as `./`
   - **Build Command**: `pnpm build` (should be auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install`

4. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add the following variables:
     ```
     WEBHOOK_URL=https://portal.indite.io/api/webhooks/cmjo4lh7f003chmdlwwj6wgj5
     WEBHOOK_TOKEN=GQFgjInEXH4k5Fz4Lh3DbT9o
     ```
   - Make sure to add them for all environments (Production, Preview, Development)

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-3 minutes)
   - Once done, you'll get a live URL like `pilze.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd /home/bacancy/Desktop/Test/nikhil/pilze
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `pilze`
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

5. **Add Environment Variables**:
   ```bash
   vercel env add WEBHOOK_URL
   # Paste: https://portal.indite.io/api/webhooks/cmjo4lh7f003chmdlwwj6wgj5
   
   vercel env add WEBHOOK_TOKEN
   # Paste: GQFgjInEXH4k5Fz4Lh3DbT9o
   ```

6. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Step 3: Post-Deployment

1. **Verify Your Deployment**:
   - Open the URL provided by Vercel
   - Test all pages:
     - Homepage: `/`
     - Products: `/products`
     - Product Details: `/products/energy-boost`
     - About: `/about`
     - Contact: `/contact`
   - Test the contact form

2. **Configure Custom Domain** (Optional):
   - Go to your project in Vercel Dashboard
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

3. **Enable Analytics** (Optional):
   - Go to "Analytics" in your project dashboard
   - Enable Vercel Analytics for insights

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch to production
- Create preview deployments for pull requests
- Provide unique URLs for each deployment

## Troubleshooting

### Build Fails

1. **Check Build Logs**: Look at the build logs in Vercel dashboard
2. **Environment Variables**: Make sure all required env variables are set
3. **Dependencies**: Ensure all dependencies are listed in `package.json`

### Contact Form Not Working

1. **Check Environment Variables**: Verify WEBHOOK_URL and WEBHOOK_TOKEN are set
2. **Check API Route**: Make sure `/api/contact/route.ts` is deployed
3. **Check Console**: Open browser console for error messages

### Images Not Loading

If you add images later:
1. Place them in the `/public` folder
2. Reference them as `/images/filename.jpg`
3. Redeploy to update

## Updating Your Site

1. **Make changes locally**
2. **Commit and push**:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. **Vercel will automatically deploy** the new version

## Environment-Specific Configuration

For different environments (development, preview, production):

```bash
# Production only
vercel env add WEBHOOK_URL production

# Preview only
vercel env add WEBHOOK_URL preview

# Development only
vercel env add WEBHOOK_URL development
```

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image Optimization
- ✅ Edge Functions
- ✅ Automatic compression

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

## Your Live URLs

After deployment, you'll have:
- **Production**: `https://pilze.vercel.app` (or your custom domain)
- **Preview**: Unique URL for each pull request
- **Development**: `http://localhost:3000`

---

**Congratulations! Your Pilze website is now live! 🎉**
