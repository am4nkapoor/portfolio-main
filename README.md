# Modern IT Services & Consultancy Website

A modern, responsive website for IT services and consultancy, built with Next.js 14, TypeScript, Tailwind CSS, and integrated with Strapi CMS for blog management.

## Features

- 🎨 Modern and responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 📝 Blog system powered by Strapi CMS
- 🖼️ Image optimization with Next.js Image component
- 🎭 Animations with Framer Motion
- 📱 Mobile-first approach
- 🔍 SEO optimized

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ and npm
- Strapi CMS (for blog functionality)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add the following:
```
STRAPI_URL=your-strapi-url
STRAPI_API_TOKEN=your-strapi-api-token
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Setting up Strapi CMS

1. Install Strapi globally:
```bash
npm install -g strapi
```

2. Create a new Strapi project:
```bash
npx create-strapi-app@latest blog-backend
```

3. Create the following content types in Strapi:
- Post
  - Title (Text)
  - Content (Rich Text)
  - Description (Text)
  - Slug (UID)
  - Cover Image (Media)
  - Author (Relation to Author)

- Author
  - Name (Text)
  - Avatar (Media)

4. Generate an API token in Strapi and add it to your `.env.local` file.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── blog/            # Blog pages
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── blog/           # Blog-related components
│   └── sections/       # Page sections
├── lib/                # Utility functions
└── public/            # Static assets
```

## Customization

- Update the content in the section components to match your business
- Modify the styling by editing the Tailwind classes
- Add new sections or modify existing ones as needed
- Customize the blog layout and features

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to your preferred hosting platform (Vercel recommended for Next.js applications).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
