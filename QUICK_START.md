# ⚡ Quick Start Guide

Get your portfolio live in 10 minutes!

## 1️⃣ Install Dependencies (1 min)

```bash
cd portfolio-mehedi
npm install
```

## 2️⃣ Update Your Information (3 min)

### Essential Updates:

**File: `components/Hero.tsx`**
- Line 50: Change "Mehedi Hasan" to your name
- Line 58: Change title
- Line 67: Change description

**File: `components/Contact.tsx`**
- Line 10: Your email
- Line 16: Your GitHub URL
- Line 22: Your LinkedIn URL
- Line 28: Your Fiverr URL (or remove)
- Line 34: Your WhatsApp number

**File: `app/layout.tsx`**
- Line 8: Update title
- Line 9: Update description

## 3️⃣ Test Locally (1 min)

```bash
npm run dev
```

Open http://localhost:3000

## 4️⃣ Build & Verify (2 min)

```bash
npm run build
```

Should complete without errors ✅

## 5️⃣ Deploy to Vercel (3 min)

### Option A: GitHub + Vercel Dashboard
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repo
4. Click "Deploy"

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel
```

## 🎉 Done!

Your portfolio is now live!

## Next Steps

1. **Add Resume:** Place `resume.pdf` in `public/` folder
2. **Add Projects:** Edit `components/Projects.tsx`
3. **Add Images:** Add project images to `public/projects/`
4. **Custom Domain:** Configure in Vercel dashboard

## Common Issues

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

## File Locations

```
📁 Personal Info
├── components/Hero.tsx          # Name, title, intro
├── components/Contact.tsx       # Email, social links
└── app/layout.tsx              # SEO metadata

📁 Content
├── components/Projects.tsx      # Your projects
├── components/About.tsx         # Skills & tech stack
├── components/AIExpertise.tsx   # AI skills
└── components/Backend.tsx       # Backend skills

📁 Assets
└── public/
    ├── resume.pdf              # Your resume
    └── projects/               # Project images
```

## Need More Help?

- 📖 Full guide: `README.md`
- 🚀 Deployment: `DEPLOYMENT.md`
- 🎨 Customization: `CUSTOMIZATION.md`
- ✅ Checklist: `LAUNCH_CHECKLIST.md`

---

**Time to launch:** ~10 minutes
**Difficulty:** Easy
**Result:** Professional portfolio website ✨
