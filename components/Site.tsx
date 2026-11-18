"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Briefcase, Code2, Download, Mail, MapPin, Menu,
  MessageCircle, Smartphone, Server, Sparkles, X, Globe, Trophy,
} from "lucide-react";
import { profile, stats, experience, webProjects, appProjects, skills, services } from "@/lib/data";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const nav = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Apps", href: "#apps" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div {...fade} className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">{eyebrow}</p>
          <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.2-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.3 2.9.1 3.2a4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <a href="#home" className="text-xl font-bold text-gradient">MH</a>
        <div className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-neutral-400 transition hover:text-white">{n.name}</a>
          ))}
          <a href="#contact" className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-sm font-medium">Hire me</a>
        </div>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="glass mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-neutral-300 hover:bg-white/5">{n.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="absolute right-1/4 top-40 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.4fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Available for remote projects & roles
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.short}</span>
          </h1>
          <p className="mb-6 text-xl font-semibold text-neutral-300 md:text-2xl">{profile.title}</p>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-400">{profile.tagline}</p>
          <div className="mb-8 flex flex-wrap gap-3">
            <a href="#work" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-medium shadow-lg shadow-violet-600/30 transition hover:scale-[1.03]">
              See my work <ArrowRight size={18} />
            </a>
            <a href={profile.resumeFullStack} download className="glass flex items-center gap-2 rounded-full px-6 py-3 font-medium transition hover:bg-white/10">
              <Download size={18} /> Download CV
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="glass rounded-full p-3 hover:bg-white/10"><GithubIcon className="h-5 w-5" /></a>
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="glass rounded-full p-3 hover:bg-white/10"><LinkedinIcon className="h-5 w-5" /></a>
            <a aria-label="Upwork" href={profile.upwork} target="_blank" rel="noreferrer" className="glass rounded-full px-4 py-3 text-sm font-semibold hover:bg-white/10">Upwork</a>
            <a aria-label="Email" href={`mailto:${profile.email}`} className="glass rounded-full p-3 hover:bg-white/10"><Mail size={20} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="mx-auto">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-violet-600 via-fuchsia-600 to-pink-500 opacity-60 blur-xl" />
            <Image src="/me.jpg" alt={profile.name} width={300} height={300} priority className="relative h-64 w-64 rounded-full border-4 border-white/10 object-cover md:h-72 md:w-72" />
            <div className="glass absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm">
              <MapPin size={14} className="text-violet-400" /> Dhaka, Bangladesh
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {stats.map((s) => (
          <motion.div {...fade} key={s.label} className="glass rounded-2xl p-5">
            <div className="text-3xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1 text-sm text-neutral-400">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const icons = [Smartphone, Globe, Server, Sparkles];
  return (
    <Section id="about" eyebrow="About" title="I build the whole product, not just one layer">
      <motion.p {...fade} className="mb-10 max-w-3xl text-lg leading-relaxed text-neutral-400">
        I&apos;m a Computer Science graduate (University of Dhaka affiliated, 2026) and a full-time Flutter developer who also
        designs backends and ships web apps. I&apos;ve built products for clients in the US, Oman and Australia — including a platform
        I built alone that reached nearly 10,000 users in its first month. I care about clean architecture, fast UIs and
        actually getting things live.
      </motion.p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[i];
          return (
            <motion.div {...fade} key={s.title} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <Icon className="mb-4 text-violet-400" />
              <h3 className="mb-2 font-semibold">{s.title}</h3>
              <p className="text-sm text-neutral-400">{s.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building">
      <div className="relative space-y-6 border-l border-white/10 pl-6 md:pl-10">
        {experience.map((e) => (
          <motion.div {...fade} key={e.role + e.company} className="relative">
            <span className="absolute -left-[31px] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 md:-left-[47px]" />
            <div className="glass rounded-2xl p-6">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <p className="text-violet-300">{e.company}</p>
                </div>
                <span className="flex items-center gap-1 text-sm text-neutral-400"><Briefcase size={14} /> {e.period}</span>
              </div>
              <ul className="space-y-1.5 text-neutral-400">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />{p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Work() {
  return (
    <Section id="work" eyebrow="Live websites" title="Websites & platforms I've shipped">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {webProjects.map((p) => (
          <motion.a {...fade} key={p.name} href={p.url} target="_blank" rel="noreferrer" className="group glass overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-900/40">
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
              <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-violet-400">{p.category}</p>
              <h3 className="mb-2 flex items-center gap-1 text-lg font-semibold">{p.name} <ArrowUpRight size={16} className="opacity-50 transition group-hover:opacity-100" /></h3>
              <p className="mb-4 text-sm text-neutral-400">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-neutral-300">{t}</span>)}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Apps() {
  return (
    <Section id="apps" eyebrow="Mobile & backend" title="Apps and systems">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {appProjects.map((a) => (
          <motion.div {...fade} key={a.name} className="glass flex flex-col rounded-2xl p-6 transition hover:bg-white/[0.07]">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
              <Smartphone size={20} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{a.name}</h3>
            <p className="mb-4 flex-1 text-sm text-neutral-400">{a.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {a.tags.map((t) => <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-neutral-300">{t}</span>)}
            </div>
            {a.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {a.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium hover:border-violet-400 hover:text-violet-300">
                    {l.label} <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & recognition">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((s) => (
          <motion.div {...fade} key={s.group} className="glass rounded-2xl p-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold"><Code2 size={18} className="text-violet-400" />{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => <span key={i} className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-neutral-300">{i}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div {...fade} className="glass mt-5 flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-center">
        <Trophy className="shrink-0 text-amber-400" size={32} />
        <div>
          <h3 className="font-semibold">ICPC Asia Dhaka Regional 2023 — Qualified (Campus Champion)</h3>
          <p className="text-sm text-neutral-400">BSc in Computer Science & Engineering, Shymoli Engineering College (affiliated with the University of Dhaka), 2021–2026 · English: fluent · Bangla: native</p>
        </div>
      </motion.div>
    </Section>
  );
}

function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={20} /> },
    { label: "WhatsApp", value: "+880 1627-021553", href: profile.whatsapp, icon: <MessageCircle size={20} /> },
    { label: "LinkedIn", value: "mehedi-hasan-mridul", href: profile.linkedin, icon: <LinkedinIcon className="h-5 w-5" /> },
    { label: "GitHub", value: "Mehedi259", href: profile.github, icon: <GithubIcon className="h-5 w-5" /> },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <motion.div {...fade} className="glass rounded-3xl p-8">
          <h3 className="mb-3 text-2xl font-semibold">Have an app, website or backend in mind?</h3>
          <p className="mb-6 text-neutral-400">
            I work with startups, agencies and small businesses worldwide — fixed-price projects, ongoing contracts or full-time
            remote roles. Tell me what you&apos;re building and I&apos;ll reply within a day.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}?subject=Project%20inquiry`} className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-medium">
              <Mail size={18} /> Email me
            </a>
            <a href={profile.upwork} target="_blank" rel="noreferrer" className="glass rounded-full px-6 py-3 font-medium hover:bg-white/10">Hire on Upwork</a>
            <a href={profile.resumeFlutter} download className="glass flex items-center gap-2 rounded-full px-6 py-3 font-medium hover:bg-white/10">
              <Download size={18} /> Flutter CV
            </a>
          </div>
        </motion.div>
        <div className="grid gap-3">
          {links.map((l) => (
            <motion.a {...fade} key={l.label} href={l.href} target="_blank" rel="noreferrer" className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:bg-white/[0.07]">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-violet-300">{l.icon}</span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-neutral-500">{l.label}</span>
                <span className="font-medium">{l.value}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default function Site() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-100">
      <Navbar />
      <Hero />
      <About />
      <ExperienceSection />
      <Work />
      <Apps />
      <Skills />
      <Contact />
      <footer className="border-t border-white/5 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js
      </footer>
    </main>
  );
}
