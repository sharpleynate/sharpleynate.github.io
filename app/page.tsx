
'use client';

import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ShieldCheck, Code, Linkedin, Github, Twitter, Youtube, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Azure SOC Honeynet',
    description:
      'Deploy a deception-based honeynet in Azure to capture and analyze attacker behavior.',
    link: 'https://github.com/sharpleynate/Azure-SOC-Honeynet',
  },
  {
    title: 'Wazuh & TheHive Implementation',
    description:
      'Integrated Wazuh SIEM with TheHive for automated alerting and case management workflows.',
    link: 'https://github.com/sharpleynate/Wazuh-TheHive-Implementation',
  },
  {
    title: 'Kill Chain MITRE ATT&CK Atomic Red Team',
    description:
      'End-to-end implementation of Atomic Red Team tests mapped to MITRE ATT&CK tactics for kill chain simulations.',
    link: 'https://github.com/sharpleynate/Kill-Chain-MITRE-ATTACK-Atomic-Red-Team',
  },
];

const blogs = [
  {
    title: 'Medium Blog: SOC Analyst Strategies That Actually Work',
    description: 'Dive into practical SOC strategies I use in the field and how they can be applied in any blue team environment.',
    link: 'https://medium.com/@sharpleynate',
  },
  {
    title: 'Medium Blog: Breaking Down MITRE ATT&CK for Beginners',
    description: 'A human-friendly breakdown of how to approach the MITRE ATT&CK framework and use it in real-world scenarios.',
    link: 'https://medium.com/@sharpleynate',
  },
];

const socials = [
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} className="text-blue-400" />,
    link: 'https://www.linkedin.com/in/sharpleynate',
  },
  {
    name: 'GitHub',
    icon: <Github size={20} className="text-white" />,
    link: 'https://github.com/sharpleynate',
  },
  {
    name: 'Twitter',
    icon: <Twitter size={20} className="text-blue-500" />,
    link: 'https://twitter.com/sharpleynate',
  },
  {
    name: 'YouTube',
    icon: <Youtube size={20} className="text-red-500" />,
    link: 'https://youtube.com/@sharpleynate',
  },
];

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Nathaniel Sharpley | CyberOps';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-black via-gray-900 to-black text-white font-sans overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-700 via-blue-500 to-teal-400 opacity-20 rounded-full blur-3xl animate-pulse top-1/4 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-10 rounded-full blur-3xl animate-ping top-1/2 left-2/3"></div>
      </div>

      <header className="relative flex flex-col items-center justify-center text-center p-12 border-b border-gray-800 z-10">
        <motion.h1
          className="text-6xl font-extrabold z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-lg leading-tight tracking-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Nathaniel Sharpley
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-300 z-10 leading-relaxed tracking-wide"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cybersecurity Specialist | Offensive & Defensive Operations | SOC Automation
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 z-10"
        >
          <Button className="flex items-center gap-2 hover:brightness-125 transition-all duration-200">
            <Download size={16} /> Download Resume
          </Button>
        </motion.div>
      </header>

      {/* Additional sections can be added here following your existing structure */}
    </div>
  );
}
