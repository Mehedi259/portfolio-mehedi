"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Sparkles, Zap, MessageSquare, Cpu, Workflow } from "lucide-react";

const aiCapabilities = [
  {
    icon: Brain,
    title: "LLM Integration",
    description: "Expert in integrating GPT-4, Claude, and custom language models into production applications",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description: "Building AI-powered content generation, image synthesis, and creative automation tools",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: MessageSquare,
    title: "AI Chat Systems",
    description: "Developing intelligent chatbots, virtual assistants, and conversational AI interfaces",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Creating automated workflows, intelligent agents, and AI-driven business processes",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Cpu,
    title: "Prompt Engineering",
    description: "Crafting optimized prompts and fine-tuning AI models for specific use cases",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Workflow,
    title: "AI Workflows",
    description: "Designing end-to-end AI pipelines, RAG systems, and intelligent data processing",
    color: "from-indigo-500 to-purple-500"
  }
];

const aiProjects = [
  "AI-powered consultation platform",
  "Intelligent recommendation systems",
  "Automated content generation",
  "Voice-to-text AI integration",
  "AI chatbot development",
  "Custom GPT implementations"
];

export default function AIExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai" ref={ref} className="py-32 relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
            <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto animate-glow">
              <Brain size={40} className="text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pioneering the future with cutting-edge AI integration and intelligent automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <capability.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              AI <span className="text-gradient">Projects & Implementations</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiProjects.map((project, index) => (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20 rounded-xl hover:border-violet-500/50 transition-all group"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-sm font-medium">{project}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
