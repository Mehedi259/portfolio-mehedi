"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Database, Brain } from "lucide-react";

const skills = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Flutter, Dart, Firebase, Native integrations",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "OpenAI, LLMs, Generative AI, AI Automation",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description: "Django DRF, PostgreSQL, REST APIs, WebSockets",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Code2,
    title: "Full Stack",
    description: "Next.js, Node.js, AWS, Cloud Architecture",
    color: "from-orange-500 to-red-500",
  },
];

const techStack = [
  "Flutter", "Dart", "Firebase", "Django", "Django REST Framework",
  "Python", "AI Integration", "LLM Integration", "OpenAI APIs",
  "Generative AI", "REST APIs", "WebSockets", "PostgreSQL",
  "Supabase", "Node.js", "Next.js", "AWS", "Cloud Functions",
  "Payment Gateway", "Real-time Systems"
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate engineer specializing in building scalable, modern applications
            with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Tech <span className="text-gradient">Stack</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-full text-sm font-medium hover:border-violet-500/60 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
