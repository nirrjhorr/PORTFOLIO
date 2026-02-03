"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT, PROFILE } from "@/lib/data";

export const Footer = () => {
    return (
        <footer className="py-12 flex flex-col items-center justify-center gap-6 px-4">

            {/* Contact Info */}
            <div className="text-center space-y-2 mb-4">
                <a href={`mailto:${CONTACT.email}`} className="block text-zinc-400 hover:text-white transition-colors">
                    {CONTACT.email}
                </a>
                <a href={`tel:${CONTACT.phone}`} className="block text-zinc-400 hover:text-white transition-colors">
                    {CONTACT.phone}
                </a>
            </div>

            {/* Dock Container */}
            <div className="flex items-end gap-4 px-6 py-4 rounded-full bg-black/20 backdrop-blur-md border border-white/5 shadow-2xl">
                {CONTACT.socials.map((social, index) => (
                    <DockIcon key={index} social={social} />
                ))}
            </div>

            <div className="text-zinc-600 text-sm mt-4">
                © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </div>
        </footer>
    );
};

const DockIcon = ({ social }: { social: any }) => {
    let [hovered, setHovered] = useState(false);

    return (
        <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex flex-col items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 2, x: "-50%" }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs text-white whitespace-nowrap z-50 pointer-events-none"
                    >
                        {CONTACT.handle}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 border-b border-r border-white/10 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                animate={{
                    scale: hovered ? 1.2 : 1,
                    y: hovered ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative p-3 rounded-2xl bg-zinc-900/50 border border-white/5 overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: social.color }}
                />
                <social.icon
                    size={24}
                    className="relative z-10 transition-colors duration-300 group-hover:text-white"
                    style={{ color: hovered ? social.color : "#71717a" }} // Zinc-500 default
                />
            </motion.div>
        </a>
    );
};
