# Customization Guide

## Quick Start Customization

### 1. Personal Information

#### Update Hero Section (`components/Hero.tsx`)
```typescript
// Line 50-55: Update your name and title
<span className="text-gradient">Your Name</span>
<h2>Your Title</h2>
<p>Your description...</p>
```

#### Update Contact Information (`components/Contact.tsx`)
```typescript
// Line 8-32: Update all contact methods
{
  icon: Mail,
  title: "Email",
  value: "your-email@example.com",
  href: "mailto:your-email@example.com",
}
```

### 2. Projects

Edit `components/Projects.tsx` (Line 8-70):

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    features: [
      "Feature 1",
      "Feature 2",
    ],
    tech: ["Tech1", "Tech2"],
    gradient: "from-blue-500 to-cyan-500",
  },
  // Add more projects...
];
```

### 3. Skills & Tech Stack

#### Update About Section (`components/About.tsx`)
```typescript
// Line 8-31: Update skills
const skills = [
  {
    icon: YourIcon,
    title: "Your Skill",
    description: "Description...",
    color: "from-blue-500 to-cyan-500",
  },
];

// Line 34-40: Update tech stack
const techStack = [
  "Tech1", "Tech2", "Tech3"
];
```

### 4. AI Expertise (`components/AIExpertise.tsx`)

Update AI capabilities (Line 8-45) and projects (Line 47-54).

### 5. Backend Skills (`components/Backend.tsx`)

Update backend skills (Line 8-45) and proficiency levels (Line 47-56).

### 6. Social Links

Update in multiple files:
- `components/Hero.tsx` (Line 95-99)
- `components/Footer.tsx` (Line 6-10)
- `components/Contact.tsx` (Line 8-32)

### 7. SEO & Metadata

Edit `app/layout.tsx` (Line 6-24):

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description...",
  // Update all metadata
};
```

### 8. Colors & Theme

#### Primary Colors
Edit `tailwind.config.ts` to change color scheme.

#### Gradient Colors
Search and replace in all components:
- `from-violet-500` → your color
- `to-purple-500` → your color

### 9. Animations

Adjust animation speeds in `tailwind.config.ts`:
```typescript
animation: {
  "float": "float 6s ease-in-out infinite", // Change 6s
  "glow": "glow 2s ease-in-out infinite", // Change 2s
}
```

### 10. Resume

Add your resume PDF to `public/resume.pdf` or update the link in:
- `components/Hero.tsx` (Line 82)
- `components/Contact.tsx` (Line 115)

## Advanced Customization

### Add New Sections

1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add to navigation in `components/Navbar.tsx`

### Change Fonts

Edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

### Add Analytics

1. Install analytics package
2. Add to `app/layout.tsx`
3. Configure in Vercel Dashboard

### Custom Domain

1. Purchase domain
2. Add in Vercel Dashboard → Domains
3. Update DNS records

## File Structure Reference

```
portfolio-mehedi/
├── app/
│   ├── layout.tsx          # Metadata, fonts, root layout
│   ├── page.tsx            # Main page structure
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # SEO sitemap
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── Navbar.tsx          # Navigation
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About & skills
│   ├── Projects.tsx        # Project showcase
│   ├── AIExpertise.tsx     # AI skills
│   ├── Backend.tsx         # Backend skills
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    ├── robots.txt          # SEO robots
    └── resume.pdf          # Your resume (add this)
```

## Tips

1. **Test Locally**: Always run `npm run dev` to test changes
2. **Build Test**: Run `npm run build` before deploying
3. **Mobile First**: Test on mobile devices
4. **Performance**: Keep images optimized
5. **Accessibility**: Maintain ARIA labels and semantic HTML

## Common Issues

### Images Not Loading
- Add images to `public/` folder
- Use Next.js Image component
- Configure `next.config.ts` for external images

### Animations Not Working
- Check Framer Motion installation
- Verify animation classes in Tailwind config

### Build Errors
- Run `npm run build` locally first
- Check TypeScript errors
- Verify all imports

## Need Help?

- Check README.md for setup instructions
- Review DEPLOYMENT.md for deployment guide
- Check Next.js docs: https://nextjs.org/docs
- Check Tailwind docs: https://tailwindcss.com/docs
