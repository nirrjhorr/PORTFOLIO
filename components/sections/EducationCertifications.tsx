"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@gravity-ui/uikit";
import { CERTIFICATIONS, EDUCATION } from "@/lib/data";

export const EducationCertifications = () => {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    Credentials
                </h2>
                <p className="text-zinc-400">Education & Certifications</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education Column */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Education</h3>
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl"
                        >
                            <h4 className="text-xl font-bold text-blue-400">{edu.degree}</h4>
                            <p className="text-white font-medium mt-1">{edu.institution}</p>
                            <div className="flex justify-between items-center mt-4 text-sm text-zinc-400">
                                <span>{edu.year}</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{edu.result}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Column */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        {CERTIFICATIONS.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full p-5 bg-zinc-900/40 border-white/5 backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-all flex flex-col justify-between" view="outlined" type="container">
                                    <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity`}>
                                        <div className={`w-16 h-16 rounded-full blur-xl ${cert.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1 relative z-10 leading-tight">{cert.name}</h4>
                                        <p className="text-sm text-zinc-400 relative z-10">{cert.issuer}</p>
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <span className="inline-block px-2 py-0.5 rounded text-[10px] tracking-wider font-mono text-zinc-500 border border-white/5 uppercase relative z-10">
                                            {cert.year}
                                        </span>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
