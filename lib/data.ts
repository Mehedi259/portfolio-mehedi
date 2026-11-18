export const profile = {
  name: "Mehedi Hasan Mridul",
  short: "Mehedi Hasan",
  title: "Flutter & Full-Stack Engineer",
  tagline:
    "I ship production mobile apps, websites and backends end to end — Flutter, Next.js, Django REST and AI integrations — from first commit to App Store, Google Play and live users.",
  location: "Dhaka, Bangladesh · Open to remote work worldwide",
  email: "mmridul207@gmail.com",
  whatsapp: "https://wa.me/8801627021553",
  github: "https://github.com/Mehedi259",
  linkedin: "https://www.linkedin.com/in/mehedi-hasan-mridul/",
  upwork: "https://www.upwork.com/freelancers/mehedihasanmridul",
  resumeFlutter: "/Mehedi_Hasan_Mridul_Flutter_Developer_CV.pdf",
  resumeFullStack: "/Mehedi_Hasan_Mridul_Full_Stack_Developer_CV.pdf",
};

export const stats = [
  { value: "~10K", label: "users in one month on a platform I built solo" },
  { value: "20+", label: "live apps & websites shipped" },
  { value: "100+", label: "repositories on GitHub" },
  { value: "ICPC", label: "Asia Dhaka Regional 2023 qualifier" },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer (Remote Contract)",
    company: "Hello Oman Tech · Muscat, Oman",
    period: "Jan 2026 – Present",
    location: "Remote",
    points: [
      "Sole developer for the company's whole product range — front end, back end and mobile apps.",
      "Built Hello Oman Sheba, a jobs, housing and marketplace platform for Bangladeshi expats in Oman — nearly 10,000 users in about a month.",
      "Shipped Flutter apps for Musafly (travel), Probash Mart (e-commerce) and Hello Carry.",
      "Built and maintain 10+ Next.js / React websites and admin dashboards: news portals, e-commerce, travel and booking.",
    ],
  },
  {
    role: "Software Developer (Flutter)",
    company: "Sparktech Agency",
    period: "Aug 2025 – Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Build and release cross-platform Flutter apps for US and international clients.",
      "Shipped ChefStarz (iOS), Menu Sidekick (AI menu scanner) and Prommt (AI video contest platform).",
      "State management with Provider, Riverpod, Bloc and GetX; REST APIs, auth, payments and AI features.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed · remote clients",
    period: "2023 – Present",
    location: "Remote",
    points: [
      "Built Doctor Food, an AI diet-management SaaS with subscriptions — live on both stores.",
      "Delivered a field-service platform for an Adelaide plumbing business: Flutter app, Django REST backend with WebSockets and a React admin.",
      "Published one-click-drf on PyPI — a CLI that scaffolds a production-ready Django REST backend.",
    ],
  },
  {
    role: "Instructor",
    company: "ShEC Programming Club",
    period: "Dec 2024 – Present",
    location: "Dhaka, Bangladesh",
    points: ["Teach competitive programming, data structures and algorithms to university students."],
  },
];

export type WebProject = {
  name: string;
  category: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
};

export const webProjects: WebProject[] = [
  {
    name: "Hello Oman Sheba",
    category: "Community platform · solo build",
    description:
      "Jobs, housing, vehicles, marketplace, Q&A and service directory for Bangladeshi expats in Oman, with web, admin dashboard and Flutter apps.",
    image: "/projects/hello-oman-sheba.jpg",
    url: "https://helloprobashsheba.com/",
    stack: ["Next.js", "Flutter", "Django REST", "Admin dashboard"],
  },
  {
    name: "Booking Sylhet",
    category: "Travel booking",
    description: "Flight and hotel booking for Sylhet with partner resorts, promo codes and bKash payments.",
    image: "/projects/booking-sylhet.jpg",
    url: "https://bookingsylhet.com/",
    stack: ["Next.js", "TypeScript", "Admin dashboard"],
  },
  {
    name: "Probash Mart",
    category: "E-commerce",
    description: "Online store for authentic products with categories, cart and admin dashboard, plus a Flutter app.",
    image: "/projects/probashmart.jpg",
    url: "https://probashmart.com/",
    stack: ["Next.js", "Django REST", "Flutter"],
  },
  {
    name: "Food Doctor",
    category: "AI health app · landing site",
    description: "Marketing site for the Doctor Food AI nutrition app — personalized meal plans and AI food scanning.",
    image: "/projects/food-doctor.jpg",
    url: "https://food-doctor-website.vercel.app/",
    stack: ["Next.js", "Tailwind", "Flutter app"],
  },
  {
    name: "Hello Probash",
    category: "News portal",
    description: "Bangla news site for the Oman expat community with video, e-paper and an editor dashboard.",
    image: "/projects/hello-probash.jpg",
    url: "https://helloprobash.com/",
    stack: ["Next.js", "Admin dashboard", "SEO"],
  },
  {
    name: "Hello Desh",
    category: "News portal",
    description: "National Bangla news portal with categories, weather widget and newsroom dashboard.",
    image: "/projects/hello-desh.jpg",
    url: "https://hellodesh.com/",
    stack: ["React", "Vite", "Django REST"],
  },
  {
    name: "Fish Market",
    category: "E-commerce",
    description: "Fresh fish & seafood marketplace for Bangladesh and Europe with product catalog and admin.",
    image: "/projects/fish-sell.jpg",
    url: "https://fish-sell-ecommerce.vercel.app/",
    stack: ["Next.js", "TypeScript"],
  },
  {
    name: "Musa Emon — Founder Site",
    category: "Personal brand site",
    description: "Portfolio for a founder running 10+ ventures across media, travel and technology.",
    image: "/projects/musaemon.jpg",
    url: "https://musaemon.com/",
    stack: ["React", "Vite", "Tailwind"],
  },
  {
    name: "Musafly",
    category: "Travel platform",
    description: "Flights, tours, Umrah packages and visa help — website, admin dashboard, backend and Flutter app.",
    image: "/projects/musafly.jpg",
    url: "https://musafly.com/",
    stack: ["Next.js", "Django REST", "Flutter"],
  },
];

export type AppProject = {
  name: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
};

export const appProjects: AppProject[] = [
  {
    name: "Doctor Food",
    description:
      "AI dietary management SaaS: AI food & menu scanner, personalized diet profiles, 30+ languages, subscriptions and in-app purchases.",
    tags: ["Flutter", "Django REST", "OpenAI", "IAP"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/dr-food/id6766101323" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor" },
    ],
  },
  {
    name: "HelpMeSpeak",
    description: "AI translator for travelers — real-time voice translation, AI chat assistant and phrasebook.",
    tags: ["Flutter", "AI", "Speech"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/helpmespeak-ai-translator/id6758175527" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.nureldin.helpmespeak" },
    ],
  },
  {
    name: "Hello Probash Sheba",
    description: "Mobile app for the Hello Oman Sheba platform — jobs, housing, marketplace and community for expats.",
    tags: ["Flutter", "REST API", "Push notifications"],
    links: [{ label: "Website", url: "https://helloprobashsheba.com/" }],
  },
  {
    name: "Menu Sidekick",
    description: "Scans restaurant menus with OCR and uses AI to flag dishes against your diet, allergies and conditions. US client.",
    tags: ["Flutter", "OCR", "AI"],
    links: [],
  },
  {
    name: "Adelaide Plumber Service",
    description:
      "Field-service app + Django REST backend with JWT, WebSockets (Channels + Redis), Celery jobs and a React admin console.",
    tags: ["Flutter", "Django", "WebSockets", "React"],
    links: [{ label: "GitHub", url: "https://github.com/Mehedi259/Plumber" }],
  },
  {
    name: "Task Mama",
    description: "AI-powered task management — smart task suggestions and an AI chat assistant for planning.",
    tags: ["Flutter", "AI"],
    links: [{ label: "Website", url: "https://www.taskmama.app/" }],
  },
  {
    name: "ChefStarz",
    description: "Cooking app built with the Sparktech team and launched on the Apple App Store.",
    tags: ["Flutter", "iOS"],
    links: [],
  },
  {
    name: "IYWT — Student Visa",
    description: "Visa application tracking with face detection and fingerprint authentication.",
    tags: ["Flutter", "Biometrics"],
    links: [{ label: "GitHub", url: "https://github.com/Mehedi259/Student_Visa_Processing_Application" }],
  },
  {
    name: "one-click-drf",
    description: "Open-source CLI that scaffolds a production-ready Django REST backend with Docker, CI/CD, Sentry and Terraform.",
    tags: ["Python", "Open source", "PyPI"],
    links: [{ label: "PyPI", url: "https://pypi.org/project/one-click-drf/" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Mobile", items: ["Flutter", "Dart", "Riverpod", "Bloc", "GetX", "Provider", "Firebase", "In-app purchases", "App Store & Play publishing"] },
  { group: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite", "Admin dashboards", "SEO"] },
  { group: "Backend", items: ["Python", "Django", "Django REST Framework", "Channels / WebSockets", "Celery", "Redis", "PostgreSQL / MySQL", "JWT"] },
  { group: "AI & DevOps", items: ["OpenAI API", "Gemini API", "OCR", "Docker", "Vercel", "GitHub Actions", "Git"] },
];

export const services = [
  { title: "Mobile apps", text: "Flutter apps for iOS & Android, from Figma to App Store and Google Play." },
  { title: "Websites & dashboards", text: "Fast Next.js websites, e-commerce, booking sites and admin panels." },
  { title: "Backends & APIs", text: "Django REST APIs with auth, payments, real-time features and background jobs." },
  { title: "AI features", text: "Chatbots, scanners, recommendations and assistants using OpenAI and Gemini." },
];
