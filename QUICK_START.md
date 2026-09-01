# ⚡ Quick Start - Deploy to Vercel in 5 Minutes

## Prerequisites
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))
- Git CLI installed

---

## Step-by-Step Setup

### 1️⃣ Create GitHub Repository (2 min)

```bash
# Go to your repository directory
cd /Users/codknoxbackend/Desktop/gsap

# Initialize git (already done)
git add .
git commit -m "feat: Monorepo setup with all projects and Vercel config"

# Create new repo on GitHub at https://github.com/new
# Name it: gsap-portfolio (or your preferred name)

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/gsap-portfolio.git
git branch -M main
git push -u origin main
```

### 2️⃣ Connect to Vercel (2 min)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Project"**
3. Click **"Import Git Repository"**
4. Paste: `https://github.com/YOUR_USERNAME/gsap-portfolio.git`
5. Click **"Import"**

### 3️⃣ Configure & Deploy (1 min)

1. Select root directory: keep as is
2. Select framework: **"Other"** (for monorepo)
3. Click **"Deploy"**

---

## ✅ Verification

After deployment:

1. **Check Deployments**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - You should see multiple projects:
     - ✅ sourav-portfolio
     - ✅ game-website
     - ✅ portfolio-3d
     - ✅ uix-kit
     - ✅ gsap-awwwards
     - ✅ gsap-cocktails
     - ✅ gsap-macbook
     - ✅ motion-website
     - ✅ portfolio-website

2. **Visit Deployment URLs**
   - Each project gets its own URL
   - Example: `sourav-portfolio-abc123.vercel.app`

3. **Enable Auto-Deployment**
   - GitHub webhook is automatically enabled
   - Every push to `main` triggers deployment

---

## 🎯 Next Steps (Optional)

### Add Custom Domain
```
1. Buy domain (e.g., sourav-ranjan-verma.com)
2. Vercel Dashboard → Settings → Domains
3. Add domain and update DNS records
4. Wait 24-48 hours for DNS propagation
```

### Add Environment Variables
```
1. Vercel Dashboard → Project Settings → Environment Variables
2. Add any required variables
3. Redeploy
```

### Setup GitHub Actions (Optional)
```
1. Copy DEPLOYMENT_GUIDE.md workflow setup
2. Create .github/workflows/deploy.yml
3. Add GitHub Secrets
4. Auto-deploy on every push
```

---

## 📊 Project Status Dashboard

Access all projects in one place:
- **Main Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **All Deployments**: Shows build status, URLs, and logs

---

## 🆘 Troubleshooting

### Build Fails?
```bash
# Check locally first
npm install --workspaces
npm run build-all

# View error logs in Vercel Dashboard
```

### Project Not Deploying?
1. Check `vercel.json` exists in project directory
2. Check `buildCommand` and `outputDirectory` are correct
3. Ensure `package.json` has `build` script

### Need to Redeploy?
```bash
# Just push to GitHub
git add .
git commit -m "fix: update"
git push origin main

# Or click "Redeploy" in Vercel Dashboard
```

---

## 📝 What's Configured

✅ **Monorepo Structure**
- Root `package.json` with workspaces
- Individual `vercel.json` per project
- `.gitignore` with standard exclusions

✅ **9 Projects Ready to Deploy**
- Static sites (Parcel, Webpack)
- React apps (Vite, Next.js)
- Animation showcase sites

✅ **Auto-Deployment**
- GitHub integration enabled
- Automatic preview deployments on PR
- Production deployments on push to `main`

---

## 🚀 After Deployment

### Monitor Deployments
```bash
# List all deployments
vercel list

# View logs for a project
vercel logs sourav-portfolio --follow
```

### Update Projects
1. Make changes locally
2. Commit: `git commit -m "update"`
3. Push: `git push origin main`
4. Vercel automatically deploys

### Scale & Optimize
- Vercel handles scaling automatically
- CDN distributes content globally
- Zero-config serverless functions

---

## 💡 Pro Tips

1. **Use Preview URLs**
   - Create branch → Get unique preview URL
   - Share preview with others
   - Merge to main → Deploys to production

2. **Monitor Performance**
   - Vercel Analytics (in project settings)
   - Real User Monitoring (RUM)
   - Build times and deployment history

3. **Collaborate**
   - Invite team members in Settings
   - Set environment variables per member
   - Control deployment permissions

---

## 📚 Resources

- **Vercel Docs**: https://vercel.com/docs
- **Monorepo Guide**: https://vercel.com/docs/concepts/monorepos
- **Custom Domains**: https://vercel.com/docs/concepts/projects/domains
- **Troubleshooting**: https://vercel.com/docs/concepts/deployments/troubleshooting

---

## 🎉 Done!

Your monorepo is now deployed to Vercel! 

Each project has its own:
- ✅ Deployment URL
- ✅ Auto-deployment on push
- ✅ Preview URLs for testing
- ✅ Build logs and monitoring

---

**Need Help?**
- Email: sourav2000ranjan@gmail.com
- Check DEPLOYMENT_GUIDE.md for advanced setup
- Read README.md for project details

---

**Happy Deploying! 🚀**
