"use client";

import React from "react";
import { SKILLS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Skill } from "@/lib/types";
import { Icon } from "@gravity-ui/uikit";

export const TechStack = () => {
    // Duplicate skills for seamless infinite scroll
    const scrollSkills = [...SKILLS, ...SKILLS];

    const renderIcon = (skill: Skill) => {
        const IconComponent = skill.icon;

        // Handle Gravity UI icons (objects with 'data' or specific structure)
        if (typeof IconComponent === 'object' && 'data' in IconComponent) {
            return (
                <Icon
                    data={IconComponent as any}
                    size={28}
                    className="transition-colors duration-300 text-zinc-400 group-hover/item:text-[var(--brand-color)]"
                    style={{ "--brand-color": skill.color } as React.CSSProperties}
                />
            );
        }

        // Handle React components (Lucide, React Icons)
        return (
            <IconComponent
                size={28}
                className="transition-colors duration-300 text-zinc-400 group-hover/item:text-[var(--brand-color)]"
                style={{ "--brand-color": skill.color } as React.CSSProperties}
            />
        );
    };

    return (
        <section className="py-12 px-4 overflow-hidden bg-zinc-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    SQA Arsenal
                </h2>
                <p className="text-zinc-400">Tools & Technologies I work with daily</p>
            </div>

            <div className="relative flex w-full max-w-7xl mx-auto overflow-hidden mask-linear-gradient group">
                <div className="flex animate-infinite-scroll gap-8 min-w-full group-hover:[animation-play-state:paused] py-4">
                    {scrollSkills.map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="relative flex items-center gap-3 px-6 py-4 rounded-xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm whitespace-nowrap transition-all duration-300 hover:border-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group/item"
                        >
                            <skill.icon
                                size={28}
                                className="transition-colors duration-300 text-zinc-400 group-hover/item:text-[var(--brand-color)]"
                                style={{ "--brand-color": skill.color } as React.CSSProperties}
                            />
                            <span className="font-medium text-lg text-zinc-200 group-hover/item:text-white transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Shadow overlays for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};
