"use client";

import React from "react";
import { Button, Icon } from "@gravity-ui/uikit";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE, QA_JOKES } from "@/lib/data";
import { ArrowDown } from "@gravity-ui/icons";
import { cn } from "@/lib/utils";

export const Hero = () => {
    const [joke, setJoke] = React.useState<string | null>(null);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handlePhotoHover = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const randomJoke = QA_JOKES[Math.floor(Math.random() * QA_JOKES.length)];
        setJoke(randomJoke);

        timeoutRef.current = setTimeout(() => {
            setJoke(null);
        }, 3000);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 relative overflow-hidden bg-zinc-950">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl space-y-8 relative z-10"
            >
                <div className="relative inline-block mx-auto mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={handlePhotoHover}
                        className="relative w-40 h-40 md:w-52 md:h-52 cursor-pointer group"
                    >
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden backdrop-blur-sm bg-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-blue-500/30">
                            <img
                                src={PROFILE.profileImage}
                                alt={PROFILE.name}
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    <AnimatePresence>
                        {joke && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10, x: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0, x: 40 }}
                                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                className="absolute top-0 -right-4 md:-right-20 z-50 pointer-events-none"
                            >
                                <div className="glass-card px-6 py-4 rounded-[1.5rem] max-w-[250px] text-sm font-medium text-white shadow-2xl border-blue-500/20 relative">
                                    {joke}
                                    {/* Tooltip Arrow alternative */}
                                    <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-zinc-900 border-l border-b border-white/5 rotate-45" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-base font-medium text-blue-400 mb-8 backdrop-blur-md">
                    {PROFILE.role}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 pb-6 break-words">
                    {PROFILE.name}
                </h1>

                <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
                    {PROFILE.summary}
                </p>

                <div className="flex items-center justify-center gap-4 mt-8">
                    <a href={PROFILE.resumeUrl} download>
                        <Button view="action" size="xl" className="rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all">
                            Download Resume
                            <Icon data={ArrowDown} size={18} className="ml-2" />
                        </Button>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

// Spotlight Component
export const Spotlight = ({
    className,
    fill,
}: {
    className?: string;
    fill?: string;
}) => {
    return (
        <svg
            className={cn(
                "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#filter)">
                <ellipse
                    cx="1924.71"
                    cy="273.501"
                    rx="1924.71"
                    ry="273.501"
                    transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
                    fill={fill || "white"}
                    fillOpacity="0.21"
                />
            </g>
            <defs>
                <filter
                    id="filter"
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="151"
                        result="effect1_foregroundBlur_1065_8"
                    />
                </filter>
            </defs>
        </svg>
    );
};
