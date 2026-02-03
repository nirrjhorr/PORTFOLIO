"use client";

import React from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS, EDUCATION, ACHIEVEMENTS } from "@/lib/data";
import { GraduationCap, Award, Calendar, BookOpen, Trophy, Sparkles, Bug } from "lucide-react";
import { cn } from "@/lib/utils";

export const EducationCertifications = () => {
    return (
        <section className="py-24 px-8 max-w-[90rem] mx-auto bg-zinc-950/50 rounded-[3rem] border border-white/5 my-20">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6 uppercase tracking-tighter">
                    Credentials
                </h2>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
                <p className="text-zinc-400 text-lg">Academic Foundation & Professional Milestones</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                {/* Education Column */}
                <div className="space-y-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                            <GraduationCap className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white tracking-tight">Education</h3>
                    </div>

                    <div className="space-y-6">
                        {EDUCATION.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(37,99,235,0.05)]"
                            >
                                {/* Blue Hue on hover */}
                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.02] transition-colors duration-500" />

                                <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                                    <GraduationCap className="w-24 h-24 text-white" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                        <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {edu.degree}
                                        </h4>
                                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono whitespace-nowrap">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {edu.year}
                                        </span>
                                    </div>
                                    <p className="text-zinc-300 text-lg font-medium mb-4 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-zinc-500" />
                                        {edu.institution}
                                    </p>
                                    <div className="inline-block px-4 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-400 font-mono text-sm">
                                        {edu.result}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div className="space-y-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                            <Award className="w-8 h-8 text-amber-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white tracking-tight">Certifications</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {CERTIFICATIONS.map((cert, index) => {
                            // Map bg color to text color for hover precisely
                            const colorMap: { [key: string]: string } = {
                                "bg-blue-500": "group-hover:text-blue-400",
                                "bg-blue-600": "group-hover:text-blue-400",
                                "bg-amber-500": "group-hover:text-amber-400",
                                "bg-amber-600": "group-hover:text-amber-400",
                                "bg-purple-500": "group-hover:text-purple-400",
                                "bg-purple-600": "group-hover:text-purple-400",
                                "bg-orange-500": "group-hover:text-orange-400",
                                "bg-orange-600": "group-hover:text-orange-400",
                                "bg-green-500": "group-hover:text-green-400",
                                "bg-red-500": "group-hover:text-red-400",
                                "bg-indigo-600": "group-hover:text-indigo-400"
                            };
                            const hoverTextColor = colorMap[cert.color] || "group-hover:text-amber-400";

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative overflow-hidden bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,158,11,0.05)]"
                                >
                                    {/* Yellow Hue on hover */}
                                    <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/[0.02] transition-colors duration-500" />

                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                                    {/* Award Icon aligned with the title block */}
                                    <div className="absolute top-8 right-8 text-white/5 group-hover:text-amber-500/20 transition-colors pointer-events-none">
                                        <Award className="w-20 h-20" />
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                                        <div>
                                            <h4 className={cn("text-xl font-bold text-white mb-2 leading-tight transition-colors", hoverTextColor)}>
                                                {cert.name}
                                            </h4>
                                            <div className="text-zinc-400 font-medium flex items-center gap-2">
                                                <div className={cn("w-2 h-2 rounded-full", cert.color)} />
                                                {cert.issuer}
                                            </div>
                                        </div>
                                        <div className="flex justify-start text-[11px] tracking-widest font-mono text-zinc-500 uppercase border-t border-white/5 pt-4">
                                            Issue Date: {cert.year}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            {ACHIEVEMENTS && ACHIEVEMENTS.length > 0 && (
                <div className="pt-20 border-t border-white/5">
                    <div className="flex items-center justify-center gap-4 mb-12 text-center">
                        <div className="p-3 rounded-2xl bg-[#ff0045]/10 border border-[#ff0045]/20">
                            <Trophy className="w-8 h-8 text-[#ff0045]" />
                        </div>
                        <h3 className="text-3xl font-bold text-white tracking-tight">Key Achievements</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                        {ACHIEVEMENTS.map((ach, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 backdrop-blur-md border border-[#ff0045]/10 p-8 rounded-[2.5rem] hover:border-[#ff0045]/30 transition-all duration-500 text-center"
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,69,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <Sparkles className="w-6 h-6 text-[#ff0045] mx-auto mb-4 animate-pulse" />
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff0045] transition-colors">
                                    {ach.title}
                                </h4>
                                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">
                                    {ach.description}
                                </p>
                                <div className="mt-6 inline-block px-4 py-1.5 rounded-full bg-[#ff0045]/10 border border-[#ff0045]/20 text-[#ff0045] font-mono text-sm">
                                    Year: {ach.year}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};
