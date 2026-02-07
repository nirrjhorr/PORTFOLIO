import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getPostData } from "@/lib/posts";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostData(slug);

    return (
        <main className="relative bg-zinc-950 min-h-screen selection:bg-blue-500/30 selection:text-white">
            {/* Background Gradient Mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <Navbar />

            <article className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <Link
                    href="/posts"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors mb-12 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Back to all articles
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
                        <span className="flex items-center gap-1">
                            <Calendar size={14} className="text-blue-400" />
                            {format(new Date(post.date), "MMMM dd, yyyy")}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <div className="flex gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-blue-400 uppercase tracking-tighter text-xs font-bold">#{tag}</span>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                        {post.title}
                    </h1>
                    {/* Cover Image - Full uncropped display for content clarity */}
                    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-auto object-contain max-h-[600px] mx-auto"
                        />
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-blue max-w-none custom-markdown">
                    <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
                </div>

                {/* Custom markdown styles */}
                <style dangerouslySetInnerHTML={{
                    __html: `
          .custom-markdown h2 { color: white; font-weight: 800; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.025em; }
          .custom-markdown h3 { color: white; font-weight: 700; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; }
          .custom-markdown p { color: #a1a1aa; font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; }
          .custom-markdown strong { color: white; }
          .custom-markdown ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; color: #a1a1aa; }
          .custom-markdown li { margin-bottom: 0.5rem; }
          .custom-markdown code { background: rgba(59, 130, 246, 0.1); color: #60a5fa; padding: 0.2rem 0.4rem; rounded: 0.375rem; font-size: 0.875rem; border: 1px solid rgba(59, 130, 246, 0.2); }
          .custom-markdown pre { background: #09090b !important; border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; padding: 1.5rem; margin: 2rem 0; overflow-x: auto; }
          .custom-markdown pre code { background: transparent; color: #e4e4e7; border: none; padding: 0; }
          .custom-markdown a { color: #3b82f6; text-decoration: none; border-bottom: 1px solid rgba(59, 130, 246, 0.2); transition: all 0.2s; }
          .custom-markdown a:hover { border-bottom-color: #3b82f6; background: rgba(59, 130, 246, 0.05); }
        `}} />
            </article>

            <Footer />
        </main>
    );
}
