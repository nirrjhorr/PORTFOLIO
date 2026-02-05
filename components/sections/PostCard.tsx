import React from "react";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { format } from "date-fns";
import { Post } from "@/lib/posts";

interface PostCardProps {
    post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Link href={`/posts/${post.slug}`}>
            <div className="group relative overflow-hidden rounded-3xl glass-card transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                {/* Cover Image */}
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                        <span className="flex items-center gap-1">
                            <Calendar size={12} className="text-blue-400" />
                            {format(new Date(post.date), "MMM dd, yyyy")}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-medium text-blue-400 uppercase tracking-wider"
                            >
                                <Tag size={8} />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};
