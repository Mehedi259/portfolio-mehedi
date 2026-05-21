"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, GitBranch, Link as LinkIcon, MessageSquare, Download, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "mehedi@example.com",
    href: "mailto:mehedi@example.com",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: GitBranch,
    title: "GitHub",
    value: "github.com/mehedi",
    href: "https://github.com",
    color: "from-gray-500 to-gray-700"
  },
  {
    icon: LinkIcon,
    title: "LinkedIn",
    value: "linkedin.com/in/mehedi",
    href: "https://linkedin.com",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: ExternalLink,
    title: "Fiverr",
    value: "fiverr.com/mehedi",
    href: "https://fiverr.com",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+1234567890",
    href: "https://wa.me/1234567890",
    color: "from-green-400 to-green-600"
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group block"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground break-all">{method.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass p-8 md:p-12 rounded-3xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m currently available for freelance work and full-time opportunities. 
              Download my resume or get in touch to discuss your project.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.a
                href="mailto:mehedi@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                <Mail size={20} />
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
