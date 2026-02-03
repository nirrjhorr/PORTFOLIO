"use client";

import React from "react";
import { Button } from "@gravity-ui/uikit";
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav className="glass rounded-full px-6 py-3 flex items-center gap-4 bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-2xl">
                <a href="#home" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    Home
                </a>
                <a href="#stack" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    Stack
                </a>
                <a href="#work" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    Work
                </a>
                <a href="#contact" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    Contact
                </a>
            </nav>
        </motion.header>
    );
};
