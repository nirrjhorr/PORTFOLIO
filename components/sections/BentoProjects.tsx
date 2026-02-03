"use client";

import React, { useState } from "react";
import { Card, Label, Button } from "@gravity-ui/uikit";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export const BentoProjects = () => {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto bg-zinc-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    Recent Work
                </h2>
                <p className="text-zinc-400">Automated Frameworks & Quality Engineering</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <HoverCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

const HoverCard = ({ project, index }: { project: any; index: number }) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <AnimatePresence>
                {hoveredIndex === index && (
                    <motion.span
                        className="absolute inset-0 h-full w-full bg-blue-500/20 block  rounded-3xl"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.15, delay: 0.2 },
                        }}
                    />
                )}
            </AnimatePresence>
            <div className="relative z-20 h-full">
                <Card className="h-full p-6 bg-zinc-900/50 border-white/10 overflow-hidden relative backdrop-blur-sm flex flex-col justify-between group-hover:border-white/20 transition-colors" view="outlined" type="container">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed text-sm line-clamp-3">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag: string, i: number) => (
                                <Label key={i} theme="info" className="bg-blue-500/10 text-blue-300 border-blue-500/20">
                                    {tag}
                                </Label>
                            ))}
                        </div>
                    </div>

                    <Button
                        view="outlined"
                        width="max"
                        className="w-full border-white/20 text-zinc-300 hover:text-white hover:border-white hover:bg-white/5"
                    >
                        View Project
                    </Button>
                </Card>
            </div>
        </motion.div>
    );
};
