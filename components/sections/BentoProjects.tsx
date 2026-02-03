"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card, Label, Button } from "@gravity-ui/uikit";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export const BentoProjects = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [carouselRef]);

    return (
        <section className="py-24 px-4 max-w-[90rem] mx-auto bg-zinc-950 overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    Projects
                </h2>
                <p className="text-zinc-400">Project Highlights & Test Coverage</p>
            </div>

            <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex gap-6 pb-8"
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[350px] md:min-w-[450px] relative h-full"
                        >
                            <Card className="h-full p-8 bg-zinc-900/50 border-white/10 backdrop-blur-sm flex flex-col justify-between group-hover:border-white/20 transition-all hover:bg-zinc-800" view="outlined" type="container">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-zinc-400 mb-8 leading-relaxed text-sm line-clamp-4 min-h-[5rem]">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag: string, i: number) => (
                                            <Label key={i} theme="info" className="bg-blue-500/10 text-blue-300 border-blue-500/20 px-3 py-1">
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
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};
