import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getSortedPostsData } from "@/lib/posts";
import { PostCard } from "@/components/sections/PostCard";
import { BookOpen } from "lucide-react";

export const metadata = {
    title: "Articles | MD Hasan Al Rashid",
    description: "Read my latest thoughts on software engineering, SQA, and technology.",
};

export default function PostsPage() {
    const posts = getSortedPostsData();

    return (
        <main className="relative bg-zinc-950 min-h-screen selection:bg-blue-500/30 selection:text-white">
            {/* Background Gradient Mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <Navbar />

            <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 uppercase tracking-widest mb-6 focus:outline-none">
                        <BookOpen size={14} />
                        Writings
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Latest <span className="text-blue-500">Articles</span>
                    </h1>
                    <p className="text-zinc-400 max-w-2xl text-lg">
                        A small collection of guides, technical insights, and thoughts on the evolving web landscape.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 glass-card rounded-3xl">
                        <p className="text-zinc-500 text-lg">No articles added yet. Stay tuned!</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
