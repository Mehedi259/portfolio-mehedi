"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Doctor Food",
    description: "A modern food ordering and restaurant platform with scalable backend architecture, real-time features, and modern UI/UX.",
    features: [
      "Flutter mobile app",
      "Django DRF backend",
      "Real-time order system",
      "Payment integration",
      "Admin dashboard"
    ],
    tech: ["Flutter", "Django", "PostgreSQL", "Firebase", "Stripe"],
    gradient: "from-orange-500 to-red-500",
    image: "/projects/doctor-food.jpg"
  },
  {
    title: "HelpMystic",
    description: "An AI-powered spiritual and consultation platform with real-time communication and advanced backend architecture.",
    features: [
      "Video/audio consultation",
      "AI features",
      "Subscription system",
      "Real-time messaging",
      "Secure backend"
    ],
    tech: ["Flutter", "Django DRF", "WebRTC", "OpenAI", "Supabase"],
    gradient: "from-violet-500 to-purple-500",
    image: "/projects/helpmystic.jpg"
  },
  {
    title: "Menu Sidekick",
    description: "A smart restaurant menu and management platform with AI-enhanced user experience.",
    features: [
      "Smart ordering",
      "AI recommendations",
      "Dashboard management",
      "Backend APIs"
    ],
    tech: ["Flutter", "AI Integration", "Django", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-500",
    image: "/projects/menu-sidekick.jpg"
  },
  {
    title: "Monfight Masieur",
    description: "A modern scalable application with custom backend architecture and advanced app workflows.",
    features: [
      "Custom architecture",
      "Advanced workflows",
      "Scalable backend",
      "Modern UI/UX"
    ],
    tech: ["Flutter", "Django", "Firebase", "Cloud Functions"],
    gradient: "from-blue-500 to-cyan-500",
    image: "/projects/monfight.jpg"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my best work in mobile development, AI integration, and full-stack engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-violet-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-violet-600/20 border border-violet-500/30 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    <ExternalLink size={18} />
                    View Project
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all"
                  >
                    <GitBranch size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
