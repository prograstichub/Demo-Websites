# 🚀 Vercel Deployment Guide - Complete Setup

## Overview

This monorepo contains 9 different projects that can be deployed to Vercel from a single repository. There are three ways to accomplish this:

---

## Option 1: Deploy All from Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

```bash
cd /Users/codknoxbackend/Desktop/gsap

# Initialize and push to GitHub
git add .
git commit -m "feat: Initialize monorepo with all projects and Vercel config"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gsap-portfolio.git
git push -u origin main
```

### Step 2: Import in Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New"** → **"Project"**
3. Select **"Import Git Repository"**
4. Connect your GitHub account
5. Select the `gsap-portfolio` repository
6. Vercel will auto-detect the monorepo structure

### Step 3: Configure Each Project

Vercel will automatically detect all projects with `vercel.json` files. For each project:

1. Click on the project
2. Go to **Settings** → **Environment Variables**
3. Add any required env vars (if needed)
4. Click **Deploy**

### Result
- Each project gets its own deployment URL
- Example: `sourav-portfolio-abc123.vercel.app`
- Automatic deployments on every push to `main` branch

---

## Option 2: Deploy Individual Projects (Manual)

### Prerequisites
```bash
npm install -g vercel
vercel login
```

### Deploy Individual Project
```bash
# Navigate to project directory
cd adeolaadeoti-portfolio

# Deploy to production
vercel --prod

# Or for preview
vercel
```

### Deploy All Projects (Batch)
```bash
#!/bin/bash
# Save as: deploy-all.sh

PROJECTS=(
  "adeolaadeoti-portfolio"
  "game-website"
  "mohitvirli.github.io"
  "uix-kit"
  "GSAP-Awwwards-Website"
  "gsap_cocktails"
  "gsap_macbook_landing"
  "motion-website"
  "Portfolio-Website"
)

for project in "${PROJECTS[@]}"; do
  echo "Deploying $project..."
  cd "$project"
  vercel --prod
  cd ..
done
```

---

## Option 3: Automated GitHub Actions (CI/CD)

### Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        project: [
          'adeolaadeoti-portfolio',
          'game-website',
          'mohitvirli.github.io',
          'uix-kit',
          'GSAP-Awwwards-Website',
          'gsap_cocktails',
          'gsap_macbook_landing',
          'motion-website',
          'Portfolio-Website'
        ]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy ${{ matrix.project }} to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./${{ matrix.project }}
          scope: ${{ secrets.VERCEL_SCOPE }}
```

### Add Secrets to GitHub

1. Go to GitHub Repo → **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `VERCEL_TOKEN`: Get from [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID`: From Vercel team settings
   - `VERCEL_SCOPE`: Your Vercel username/team

---

## Project-Specific Build Configurations

### 1. adeolaadeoti-portfolio (Parcel)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### 2. game-website (Vite + React)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### 3. mohitvirli.github.io (Next.js)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

### 4. uix-kit (Webpack)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "static"
}
```

---

## Setting Up Custom Domains

### Add Custom Domain for Main Portfolio

1. **Primary Domain**: `sourav-ranjan-verma.com`
   - Vercel → sourav-portfolio project → Settings → Domains
   - Add `sourav-ranjan-verma.com`
   - Update DNS records (provided by Vercel)

2. **Subdomains** (Optional):
   - `game.sourav-ranjan-verma.com` → game-website
   - `3d.sourav-ranjan-verma.com` → portfolio-3d
   - `uix.sourav-ranjan-verma.com` → uix-kit
   - etc.

### DNS Configuration (Example with Namecheap)

```
Record Type | Name | Value
-----------|------|------
CNAME      | @    | cname.vercel-dns.com
CNAME      | www  | cname.vercel-dns.com
```

---

## Environment Variables Setup

### Root Level (.env.local)
```
# Vercel Deployment
VERCEL_PROJECT_ID=abc123
VERCEL_ORG_ID=xyz789

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Per-Project (Optional)
```
# Each project/.env.local
REACT_APP_API_URL=https://api.example.com
VITE_API_URL=https://api.example.com
```

---

## Verification Checklist

- [ ] Repository pushed to GitHub
- [ ] Vercel account created and logged in
- [ ] Repository imported in Vercel Dashboard
- [ ] All 9 projects show in Vercel deployments
- [ ] Each project has unique deployment URL
- [ ] Environment variables configured (if needed)
- [ ] Custom domains configured (optional)
- [ ] GitHub webhook enabled for auto-deployments
- [ ] First deployment successful
- [ ] All projects building without errors

---

## Troubleshooting

### Build Fails
```bash
# Check build in each project
cd project-name
npm install
npm run build
```

### Deployment URL Not Working
- Check output directory matches vercel.json
- Verify framework detection (Vercel should auto-detect)
- Check build logs in Vercel Dashboard

### Dependencies Not Installing
- Ensure package.json in root and each project
- Check workspaces configuration
- Run: `npm install --workspaces`

---

## Next Steps

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial monorepo setup"
   git push origin main
   ```

2. **Connect to Vercel**
   - Login to [vercel.com](https://vercel.com)
   - Import repository
   - Configure environment variables if needed
   - Deploy!

3. **Monitor Deployments**
   - Vercel Dashboard shows all projects
   - Each push to main triggers auto-deployment
   - Preview deployments for pull requests

---

## Quick Deployment Commands

```bash
# Verify setup
npm install --workspaces
npm run build-all

# Deploy to production (after GitHub push)
vercel --prod

# View deployment status
vercel list

# Check logs
vercel logs <project-name>
```

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Monorepo Setup**: https://vercel.com/docs/concepts/monorepos
- **Custom Domains**: https://vercel.com/docs/concepts/projects/domains
- **Environment Variables**: https://vercel.com/docs/concepts/projects/environment-variables

---

**Author**: Sourav Ranjan Verma  
**Email**: sourav2000ranjan@gmail.com  
**Last Updated**: 2026
