"use client";

import { motion } from "framer-motion";
import { GitBranch, Link as LinkIcon, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: GitBranch, href: "https://github.com", label: "GitHub" },
  { icon: LinkIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mehedi@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">Mehedi Hasan</h3>
            <p className="text-sm text-muted-foreground">
              Senior Flutter & AI Integration Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-3 glass rounded-full hover:bg-white/10 transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-red-500" /> using Next.js, TypeScript & Framer Motion
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Mehedi Hasan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
