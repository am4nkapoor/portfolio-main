import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPosts } from "@/lib/strapi";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, technology trends, and industry news.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts?.map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
} 