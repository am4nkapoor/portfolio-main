import { blogPosts } from '@/lib/blog-service';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ShareButtons from '@/app/components/ShareButtons';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const currentUrl = typeof window !== 'undefined'
    ? window.location.href
    : `https://yourdomain.com/blog/${params.slug}`;

  return (
    <main className="container mx-auto px-4 py-12">


      <article className="max-w-4xl mx-auto py-6">
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center justify-between gap-4 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
            <ShareButtons
              url={currentUrl}
              title={post.title}
              text={post.shareText}
            />
          </div>

          <div className="mt-8">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                ← Back to Blog
              </Link>
              <ShareButtons
                url={currentUrl}
                title={post.title}
                text={post.shareText}
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
} 