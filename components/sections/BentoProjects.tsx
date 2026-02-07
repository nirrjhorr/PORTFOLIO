"use client";

import React from "react";
import { Card } from "@gravity-ui/uikit";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export const BentoProjects = () => {
    return (
        <section className="py-24 px-4 max-w-[90rem] mx-auto bg-zinc-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    Recent Work
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full p-8 bg-zinc-900/50 border-white/10 backdrop-blur-sm flex flex-col group hover:border-white/20 transition-all hover:bg-zinc-800" view="outlined" type="container">
                            <h3 className="text-xl font-bold text-white mb-3 min-h-[3.5rem] line-clamp-2">{project.title}</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed text-sm line-clamp-4 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-nowrap gap-1.5 overflow-x-auto no-scrollbar scroll-smooth mt-auto pt-4 border-t border-white/5">
                                {project.tags.map((tag: string, i: number) => (
                                    <span
                                        key={i}
                                        className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
