"use client";

import React from "react";
import { Button, Icon } from "@gravity-ui/uikit";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE, QA_JOKES } from "@/lib/data";
import { ArrowDown } from "@gravity-ui/icons";
import { cn } from "@/lib/utils";

import Link from "next/link";

export const Hero = () => {
    const [toast, setToast] = React.useState<{ message: string; position: 'left' | 'right'; top: string } | null>(null);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handlePhotoHover = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const randomJoke = QA_JOKES[Math.floor(Math.random() * QA_JOKES.length)];
        const positions: ('left' | 'right')[] = ['left', 'right'];
        const randomPosition = positions[Math.floor(Math.random() * positions.length)];
        // Random top position between 10% and 80% to keep it on screen
        const randomTop = `${Math.floor(Math.random() * 70) + 10}%`;

        setToast({ message: randomJoke, position: randomPosition, top: randomTop });

        timeoutRef.current = setTimeout(() => {
            setToast(null);
        }, 1200);
    };

    const getToastVariants = (position: 'left' | 'right') => {
        switch (position) {
            case 'left':
                return { initial: { x: -100, opacity: 0 }, animate: { x: 40, opacity: 1 }, exit: { x: -100, opacity: 0 } };
            case 'right':
                return { initial: { x: 100, opacity: 0 }, animate: { x: -40, opacity: 1 }, exit: { x: 100, opacity: 0 } };
        }
    };

    const getToastStyle = (toastData: { position: 'left' | 'right'; top: string }): React.CSSProperties => {
        const baseStyle: React.CSSProperties = { top: toastData.top, transform: 'translateY(-50%)' };
        if (toastData.position === 'left') {
            return { ...baseStyle, left: 0 };
        }
        return { ...baseStyle, right: 0 };
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
                className="max-w-4xl relative z-10 flex flex-col items-center"
            >
                {/* Vertical Profile Section: Photo -> Title -> Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    onMouseEnter={handlePhotoHover}
                    className="relative w-40 h-40 md:w-52 md:h-52 cursor-pointer group mb-6"
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

                <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-base font-medium text-blue-400 backdrop-blur-md mb-4">
                    {PROFILE.role}
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 pb-2 break-words">
                        {PROFILE.name}
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-4">
                        {PROFILE.summary}
                    </p>
                </div>

                <AnimatePresence>
                    {toast && (
                        <motion.div
                            key={toast.message}
                            initial={getToastVariants(toast.position).initial}
                            animate={getToastVariants(toast.position).animate}
                            exit={getToastVariants(toast.position).exit}
                            className="fixed z-[9999] pointer-events-none p-6"
                            style={getToastStyle(toast)}
                        >
                            <div className="glass-card px-8 py-6 rounded-[2rem] max-w-[320px] text-base font-medium text-white shadow-[0_0_50px_rgba(0,0,0,0.5)] border-blue-500/30 relative">
                                <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                                {toast.message}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex flex-col items-center justify-center gap-4 mt-8">
                    <a href={PROFILE.resumeUrl} download className="inline-block">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group overflow-hidden rounded-full inline-block shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-shadow duration-300"
                        >
                            {/* Animated Shimmer Effect */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "linear",
                                    repeatDelay: 2
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-10"
                            />

                            <Button view="action" size="xl" className="rounded-full px-8 py-6 text-lg transition-all relative z-20">
                                Download Resume
                                <Icon data={ArrowDown} size={18} className="ml-2" />
                            </Button>
                        </motion.div>
                    </a>
                    <Link href="/posts">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative group overflow-hidden rounded-full inline-block shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(255,191,0,0.6)] transition-shadow duration-300"
                        >
                            {/* Animated Shimmer Effect */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2.5,
                                    ease: "linear",
                                    repeatDelay: 1
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-10"
                            />

                            <Button size="xl" className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white border-2 border-amber-200/50 hover:border-amber-300 transition-all duration-300 uppercase tracking-widest font-bold">
                                My Articles!
                            </Button>
                        </motion.div>
                    </Link>
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
