"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Lock, Zap, Cloud, GitBranch } from "lucide-react";

const backendSkills = [
  {
    icon: Server,
    title: "Django REST Framework",
    description: "Building robust, scalable REST APIs with advanced authentication and authorization",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "PostgreSQL, Firebase, Supabase - designing efficient data models and queries",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lock,
    title: "Authentication Systems",
    description: "JWT, OAuth, session management, and secure user authentication flows",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Zap,
    title: "Real-time Systems",
    description: "WebSocket architecture, real-time messaging, and live data synchronization",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "AWS, Firebase, cloud functions, serverless architecture, and deployment pipelines",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: GitBranch,
    title: "API Optimization",
    description: "Performance tuning, caching strategies, and scalable API design patterns",
    color: "from-indigo-500 to-violet-500"
  }
];

const backendTech = [
  { name: "Django", level: 95 },
  { name: "Django REST Framework", level: 95 },
  { name: "PostgreSQL", level: 90 },
  { name: "Firebase", level: 90 },
  { name: "WebSockets", level: 85 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 85 },
  { name: "Redis", level: 80 }
];

export default function Backend() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="backend" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto animate-glow">
              <Server size={40} className="text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Backend <span className="text-gradient">Engineering</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Architecting scalable, secure, and high-performance backend systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {backendSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Backend <span className="text-gradient">Proficiency</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {backendTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tech.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
