import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/strapi";
import { formatDate } from "@/lib/utils";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.attributes.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const {
    attributes: {
      title,
      content,
      publishedAt,
      coverImage,
      author,
    },
  } = post;

  return (
    <article className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={coverImage.data.attributes.url}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={author.data.attributes.avatar.data.attributes.url}
                alt={author.data.attributes.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{author.data.attributes.name}</p>
              <p className="text-sm text-gray-500">{formatDate(publishedAt)}</p>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </article>
  );
} 