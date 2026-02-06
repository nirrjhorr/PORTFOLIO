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
        <section className="py-24 px-8 max-w-[90rem] mx-auto">
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

                        <div className="md:w-[48%] ml-12 md:ml-0 w-full" /> {/* Spacer */}

                        <div className="ml-12 md:ml-0 md:w-[48%] w-full bg-zinc-900/40 backdrop-blur border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors group">
                            <div className="flex items-center gap-5 mb-6">
                                {/* Logo / Monogram Fallback */}
                                {/* Logo / Monogram Fallback */}
                                {/* Logo / Monogram Fallback */}
                                <div className={cn("w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-lg shrink-0 overflow-hidden relative border-4 border-white/10", !exp.logo && getColor(exp.company))}>
                                    {exp.logo ? (
                                        <div className="w-full h-full p-3 bg-white flex items-center justify-center">
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ) : (
                                        exp.icon ? (
                                            <exp.icon size={32} className="text-white" />
                                        ) : (
                                            <span className="font-bold text-2xl text-white">{getInitials(exp.company)}</span>
                                        )
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                                    <p className="text-zinc-400 font-medium text-lg">{exp.company}</p>
                                </div>
                            </div>

                            <span className="text-sm font-mono text-blue-400 mb-6 block border-b border-white/5 pb-3 italic">{exp.period}</span>

                            <ul className="space-y-4">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="text-base text-zinc-400 leading-relaxed flex items-start gap-3 break-words">
                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                                        <span>{item}</span>
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
