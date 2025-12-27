# Quick Deploy Commands

# 1. Initialize Git (if not done)
git init
git add .
git commit -m "Initial commit: Pilze functional drinks website"

# 2. Create GitHub repo and push
# First create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/pilze.git
git branch -M main
git push -u origin main

# 3. Deploy to Vercel (choose one method)

## Method A: Via Vercel Dashboard (Easiest)
# 1. Go to vercel.com and sign in with GitHub
# 2. Click "Add New Project"
# 3. Import your GitHub repository
# 4. Add environment variables:
#    - WEBHOOK_URL=https://portal.indite.io/api/webhooks/cmjo4lh7f003chmdlwwj6wgj5
#    - WEBHOOK_TOKEN=GQFgjInEXH4k5Fz4Lh3DbT9o
# 5. Click Deploy

## Method B: Via Vercel CLI
npm install -g vercel
vercel login
vercel

# Add environment variables
vercel env add WEBHOOK_URL
# Paste: https://portal.indite.io/api/webhooks/cmjo4lh7f003chmdlwwj6wgj5

vercel env add WEBHOOK_TOKEN
# Paste: GQFgjInEXH4k5Fz4Lh3DbT9o

# Deploy to production
vercel --prod

# 4. Future updates
git add .
git commit -m "Your changes"
git push
# Vercel will auto-deploy!
