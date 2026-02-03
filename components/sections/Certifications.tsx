"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@gravity-ui/uikit";
import { CERTIFICATIONS } from "@/lib/data";

export const Certifications = () => {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    Certifications
                </h2>
                <p className="text-zinc-400">Validated Skills & Knowledge</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full p-6 bg-zinc-900/40 border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-all" view="outlined" type="container">
                            <div className={`absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity`}>
                                <div className={`w-24 h-24 rounded-full blur-2xl ${cert.color}`} />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1 relative z-10">{cert.name}</h3>
                            <p className="text-sm text-zinc-400 mb-4 relative z-10">{cert.issuer}</p>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 relative z-10">
                                {cert.year}
                            </span>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
