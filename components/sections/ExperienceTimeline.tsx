"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { cn } from "@/lib/utils";

// Helper to get initials for fallback
const getInitials = (name: string) => name.charAt(0).toUpperCase();

// Helper to get color based on name (hashing)
const getColor = (name: string) => {
    const colors = ["bg-blue-500", "bg-purple-500", "bg-emerald-500", "bg-rose-500", "bg-amber-500"];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
};

export const ExperienceTimeline = () => {
    return (
        <section className="py-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-16 text-center">
                Experience
            </h2>

            <div className="relative space-y-12">
                {/* Vertical line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20 md:left-1/2 md:-ml-px" />

                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Dot */}
                        <div className="absolute left-[14px] top-6 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 md:left-1/2 md:-ml-1.5 md:top-8" />

                        <div className="md:w-5/12 ml-12 md:ml-0 w-full" /> {/* Spacer */}

                        <div className="ml-12 md:ml-0 md:w-5/12 w-full bg-zinc-900/40 backdrop-blur border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors group">
                            <div className="flex items-center gap-4 mb-4">
                                {/* Logo / Monogram Fallback */}
                                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg", getColor(exp.company))}>
                                    {getInitials(exp.company)}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-zinc-400 font-medium">{exp.company}</p>
                                </div>
                            </div>

                            <span className="text-sm font-mono text-blue-400 mb-4 block border-b border-white/5 pb-2">{exp.period}</span>

                            <ul className="space-y-2">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="text-sm text-zinc-400 leading-relaxed flex items-start gap-2 break-words">
                                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                                        <span className="line-clamp-3">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};
