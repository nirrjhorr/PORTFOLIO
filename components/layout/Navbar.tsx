"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const navLinks = [
        { href: isHomePage ? "#home" : "/#home", label: "Home" },
        { href: isHomePage ? "#work" : "/#work", label: "Work" },
        { href: isHomePage ? "#projects" : "/#projects", label: "Projects" },
        { href: isHomePage ? "#education" : "/#education", label: "Education" },
        { href: isHomePage ? "#contact" : "/#contact", label: "Contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav className="relative glass rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between md:justify-center gap-6 bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[300px] md:min-w-fit">
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-base font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Trigger (Three Dot) */}
                <div className="md:hidden flex items-center justify-between w-full">
                    <span className="text-sm font-bold text-white/50 tracking-widest uppercase ml-2">Menu</span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-white hover:text-blue-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <MoreHorizontal size={24} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-4 p-4 glass rounded-3xl bg-zinc-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-4 overflow-hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-semibold text-white hover:text-blue-400 transition-colors px-4 py-2 rounded-xl hover:bg-white/5"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};


