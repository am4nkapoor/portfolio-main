import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog-service';

interface BlogListProps {
    posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                        <div className="relative h-48 w-full">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                <span>{post.readingTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                                {post.description}
                            </p>
                            <div className="mt-4 flex items-center">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    By {post.author}
                                </span>
                                <span className="ml-auto text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                                    Read more →
                                </span>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
} 