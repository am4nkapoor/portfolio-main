import { blogPosts } from '@/lib/blog-service';
import BlogList from '@/app/components/BlogList';

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Insights, tutorials, and updates from our team
        </p>
      </div>
      <BlogList posts={blogPosts} />
    </main>
  );
} 