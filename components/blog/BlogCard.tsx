import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface BlogPost {
  id: string;
  attributes: {
    title: string;
    description: string;
    slug: string;
    publishedAt: string;
    coverImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    author: {
      data: {
        attributes: {
          name: string;
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const {
    attributes: {
      title,
      description,
      slug,
      publishedAt,
      coverImage,
      author,
    },
  } = post;

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={coverImage.data.attributes.url}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
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
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </div>
    </article>
  );
} 