// Mock data for development
const mockPosts = [
  {
    id: 1,
    attributes: {
      title: "Getting Started with Web Development",
      description: "Learn the basics of web development and start your journey.",
      content: "Web development is an exciting field that combines creativity with technical skills. In this post, we'll explore the fundamentals of web development, including HTML, CSS, and JavaScript. We'll also look at modern frameworks and best practices for building responsive, user-friendly websites.",
      slug: "getting-started-with-web-development",
      publishedAt: "2024-01-01",
      coverImage: {
        data: {
          attributes: {
            url: "/blog/post1.jpg"
          }
        }
      },
      author: {
        data: {
          attributes: {
            name: "John Doe",
            avatar: {
              data: {
                attributes: {
                  url: "/avatars/john.jpg"
                }
              }
            }
          }
        }
      }
    }
  },
  {
    id: 2,
    attributes: {
      title: "Modern Frontend Development",
      description: "Explore modern frontend development practices and tools.",
      content: "Frontend development has evolved significantly in recent years. This post covers modern tools and practices like React, Next.js, and Tailwind CSS. Learn how to build beautiful, performant web applications using these cutting-edge technologies.",
      slug: "modern-frontend-development",
      publishedAt: "2024-01-02",
      coverImage: {
        data: {
          attributes: {
            url: "/blog/post2.jpg"
          }
        }
      },
      author: {
        data: {
          attributes: {
            name: "Jane Smith",
            avatar: {
              data: {
                attributes: {
                  url: "/avatars/jane.jpg"
                }
              }
            }
          }
        }
      }
    }
  }
];

export async function getBlogPosts() {
  // Return mock data instead of fetching from API
  return mockPosts;
}

export async function getBlogPost(slug: string) {
  // Find and return mock post by slug
  return mockPosts.find(post => post.attributes.slug === slug) || null;
} 