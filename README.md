# Sourav Ranjan Verma - Portfolio Projects Monorepo

A monorepo containing all personal projects and portfolio websites for Sourav Ranjan Verma, a Full Stack Developer.

## 📁 Projects

| Project | Type | Deploy URL | Tech Stack |
|---------|------|-----------|-----------|
| **sourav-portfolio** | Personal Portfolio | `sourav-ranjan-verma.vercel.app` | HTML, CSS, JS, Parcel |
| **game-website** | 3D Gaming Website | `game-website.vercel.app` | React, Vite, GSAP, Tailwind |
| **portfolio-3d** | 3D Portfolio | `portfolio-3d.vercel.app` | Next.js, React Three Fiber, GSAP |
| **uix-kit** | UI Component Library | `uix-kit.vercel.app` | Bootstrap, Webpack |
| **gsap-awwwards** | GSAP Animation Demo | `gsap-awwwards.vercel.app` | Vite, GSAP |
| **gsap-cocktails** | Cocktails Website | `gsap-cocktails.vercel.app` | GSAP Animation |
| **gsap-macbook** | MacBook Landing | `gsap-macbook.vercel.app` | GSAP Animation |
| **motion-website** | Motion Design Showcase | `motion-website.vercel.app` | Vite, Motion |
| **portfolio-website** | Portfolio Website | `portfolio-website.vercel.app` | Modern Web Tech |

## 🚀 Quick Start

### Install Dependencies
```bash
npm install --workspaces
```

### Development
```bash
# Run specific project (e.g., game-website)
npm run dev --workspace=game-website

# Build all projects
npm run build-all
```

## 📦 Monorepo Structure

```
gsap/
├── package.json (root)
├── vercel.json (monorepo config)
├── .gitignore
├── adeolaadeoti-portfolio/
├── game-website/
├── mohitvirli.github.io/
├── uix-kit/
├── GSAP-Awwwards-Website/
├── gsap_cocktails/
├── gsap_macbook_landing/
├── motion-website/
└── Portfolio-Website/
```

## 🔧 Deployment on Vercel

### Option 1: Deploy All Projects from Single Repository

1. **Connect Repository to Vercel**
   ```bash
   vercel login
   vercel link
   ```

2. **Deploy All Projects**
   - Each project has its own `vercel.json` configuration
   - Vercel will automatically detect and deploy each project separately
   - Preview deployments will be created for each project

3. **Configure Custom Domains**
   - Go to Vercel Dashboard → Settings → Domains
   - Add custom domain for each project:
     - `sourav-ranjan-verma.com` → sourav-portfolio
     - `game.sourav-ranjan-verma.com` → game-website
     - etc.

### Option 2: Deploy Individual Projects

```bash
# Deploy specific project
cd adeolaadeoti-portfolio
vercel --prod

cd ../game-website
vercel --prod
```

### Option 3: Automated Deployment with GitHub

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial monorepo setup"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. Connect GitHub to Vercel:
   - Import repository in Vercel Dashboard
   - Vercel auto-detects monorepo structure
   - Each project gets automatic deployments on push

## 📋 Build Commands by Project

Each project includes build scripts in their respective `package.json`:

- **adeolaadeoti-portfolio**: `npm run build` → Parcel
- **game-website**: `npm run build` → Vite
- **mohitvirli.github.io**: `npm run build` → Next.js
- **uix-kit**: `npm run build` → Webpack
- Other projects: `npm run build` → Vite/Custom

## 🌐 Environment Variables

Create `.env.local` in root or individual project directories for environment-specific settings.

Vercel Environment Variables can be configured per project in Dashboard.

## 👤 Author

**Sourav Ranjan Verma**
- Email: sourav2000ranjan@gmail.com
- GitHub: [@sourav-ranjan-verma](https://github.com/sourav-ranjan-verma)
- LinkedIn: [Sourav Ranjan Verma](https://linkedin.com/in/sourav-ranjan-verma)
- Location: Mohali, Punjab, India

## 📞 Contact

For inquiries or collaborations, reach out via:
- Email: sourav2000ranjan@gmail.com
- Phone: +91 6207841629

## 📄 License

MIT

---

**Last Updated**: 2026
