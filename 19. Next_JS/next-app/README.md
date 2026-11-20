# Next.js Learning Project

A practical Next.js project for learning the App Router, React Server Components, file-based routing, API Route Handlers, images, metadata, caching, and deployment.

This project uses **Next.js 16.4.6**, **React 19.3.0**, and JavaScript.

## 1. Next.js Introduction

### What is Next.js?

Next.js is a React framework for building full-stack web applications. It adds features that React alone does not provide directly, including routing, server-side rendering, static generation, API endpoints, image optimization, and SEO metadata.

| React | Next.js |
|---|---|
| A JavaScript UI library | A React framework |
| Requires a separate routing setup | Provides file-based routing |
| Commonly used to build client-side applications | Supports client and server rendering |
| API code is usually handled by a separate backend | Can include API Route Handlers |
| Images and assets need manual optimization | Provides `next/image` optimization |
| Build and rendering choices require more setup | Includes common framework conventions |

You can use React components inside Next.js, but Next.js provides the structure and tools needed to turn them into an application.

## 2. App Router vs Pages Router

This project uses the **App Router**.

### App Router

- Routes live inside `src/app`
- Uses files such as `page.js`, `layout.js`, `loading.js`, and `error.js`
- Supports React Server Components by default
- Supports nested layouts and route groups
- This is the recommended routing system for new applications

### Pages Router

- Uses the `pages` directory
- Uses `pages/index.js` for `/`
- Uses `pages/blog.js` for `/blog`
- Uses `getServerSideProps`, `getStaticProps`, and `getStaticPaths` for older data-fetching patterns

The App Router and Pages Router can exist in the same project, but new projects should generally use the App Router.

## 3. Project Setup

### Requirements

- Node.js
- npm, yarn, pnpm, or bun

### Create and run the project

```bash
npx create-next-app@latest next-app
cd next-app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Folder structure

```text
next-app/
├── public/
│   ├── images.png
│   └── ...
├── src/
│   └── app/
│       ├── api/
│       │   └── blogs/
│       │       └── route.js
│       ├── blog/
│       │   ├── [id]/
│       │   │   └── page.js
│       │   └── page.js
│       ├── contact/
│       │   └── page.js
│       ├── favicon.ico
│       ├── global-not-found.js
│       ├── globals.css
│       ├── layout.js
│       └── page.js
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
└── package.json
```

- `src/app/page.js` represents the `/` route.
- `src/app/blog/page.js` represents `/blog`.
- `src/app/blog/[id]/page.js` represents `/blog/:id`.
- `src/app/api/blogs/route.js` creates `/api/blogs`.
- `public/` stores files that can be accessed from the root URL.
- `layout.js` defines shared UI and document structure.
- `globals.css` contains global styles.
- `next.config.mjs` contains Next.js configuration.

## 4. File-Based Routing

Next.js creates routes from folders and files inside `src/app`.

| File | URL |
|---|---|
| `src/app/page.js` | `/` |
| `src/app/blog/page.js` | `/blog` |
| `src/app/contact/page.js` | `/contact` |
| `src/app/blog/[id]/page.js` | `/blog/1`, `/blog/2`, etc. |

### Nested routes

Create nested routes by nesting folders:

```text
src/app/dashboard/
├── layout.js
├── page.js
└── settings/
    └── page.js
```

This creates:

- `/dashboard`
- `/dashboard/settings`

### Dynamic routes

A folder wrapped in square brackets is a dynamic segment:

```text
src/app/blog/[id]/page.js
```

In a Client Component, read the segment with `useParams`:

```jsx
"use client";

import { useParams } from "next/navigation";

export default function BlogDetails() {
  const { id } = useParams();
  return <h1>Blog: {id}</h1>;
}
```

In a Server Component, params can be awaited:

```jsx
export default async function BlogDetails({ params }) {
  const { id } = await params;
  return <h1>Blog: {id}</h1>;
}
```

Navigation can be created with `next/link`:

```jsx
import Link from "next/link";

<Link href="/blog/1">Open blog 1</Link>
```

## 5. Layouts and Special Pages

### Layout

A layout wraps routes and preserves shared UI while navigating.

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

The root layout must include `<html>` and `<body>`.

### Loading state

Add `loading.js` to show a loading UI while a route segment loads:

```jsx
export default function Loading() {
  return <p>Loading...</p>;
}
```

### Error state

Add `error.js` to handle errors in a route segment:

```jsx
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### Not-found state

Add `not-found.js` for a route-specific 404 page:

```jsx
export default function NotFound() {
  return <h1>Page not found</h1>;
}
```

The project also contains `src/app/global-not-found.js`. It provides a custom global 404 page and is enabled by `globalNotFound: true` in `next.config.mjs`.

## 6. Server Components vs Client Components

Server Components are the default in the App Router.

### Server Components

Use a Server Component for:

- Reading files or databases
- Fetching server data
- Keeping secrets on the server
- Rendering static or mostly static UI
- Reducing JavaScript sent to the browser

```jsx
export default async function BlogPage() {
  const response = await fetch("https://example.com/api/blogs");
  const blogs = await response.json();

  return <h1>{blogs[0].title}</h1>;
}
```

### Client Components

Add `"use client"` when a component needs:

- `useState` or `useEffect`
- Browser event handlers
- Browser APIs
- Hooks such as `useParams` or `useRouter`

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Keep the `"use client"` boundary as close to the interactive UI as possible. Server Components can render inside a Client Component, but interactive child components may need to be Client Components.

## 7. API Creation with Route Handlers

Route Handlers create API endpoints inside `src/app`.

The project has `src/app/api/blogs/route.js`, so it exposes:

- `GET /api/blogs`
- `POST /api/blogs`

```jsx
export async function GET() {
  return Response.json({
    success: true,
    blogs: [
      { id: 1, title: "First Blog Post" },
      { id: 2, title: "Second Blog Post" },
    ],
  });
}

export async function POST(request) {
  const body = await request.json();

  return Response.json({
    message: "Blog created successfully",
    blog: body,
  });
}
```

Test the endpoint from a browser or tool:

```bash
curl http://localhost:3000/api/blogs
```

Send JSON:

```bash
curl -X POST http://localhost:3000/api/blogs ^
  -H "Content-Type: application/json" ^
  -d "{\"title\":\"New blog\"}"
```

Route Handlers can export `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, or `OPTIONS`.

## 8. Image Optimization

Use `next/image` instead of a plain `<img>` when possible.

### Local image

```jsx
import Image from "next/image";

export default function Example() {
  return (
    <Image
      src="/images.png"
      alt="Example image"
      width={300}
      height={300}
      priority
    />
  );
}
```

Benefits include automatic resizing, lazy loading, modern formats, and protection against layout shift.

For images with external domains, add the domain to `next.config.mjs` using the required Next.js image configuration.

## Quick Overview

### Metadata and SEO

Export a static `metadata` object from a layout or page:

```jsx
export const metadata = {
  title: "Blog Page",
  description: "Read articles on this Next.js learning website.",
};
```

The root layout currently exports metadata, and the blog page exports page-specific metadata. Metadata can include titles, descriptions, Open Graph information, canonical URLs, icons, and robots settings.

For dynamic metadata, export `generateMetadata`:

```jsx
export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: `Blog ${id}`,
    description: `Details for blog ${id}`,
  };
}
```

### Environment variables

Server-only variables can be read without exposing them to the browser:

```env
DATABASE_URL=postgresql://user:password@host/database
API_SECRET=secret-value
```

```jsx
const secret = process.env.API_SECRET;
```

Variables prefixed with `NEXT_PUBLIC_` are exposed to browser code:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

Never store private keys or passwords in `NEXT_PUBLIC_*` variables.

Restart the development server after changing `.env` files.

### Deployment on Vercel

For a Vercel deployment:

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Import it in the Vercel dashboard.
3. Add required environment variables.
4. Deploy the project.

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

For a manual production build:

```bash
npm run build
npm run start
```

### Data fetching and basic caching

In Server Components, use `fetch` directly:

```jsx
const response = await fetch("https://api.example.com/posts");
const posts = await response.json();
```

Common caching options include:

- `{ cache: "force-cache" }`: cache the response and reuse it.
- `{ cache: "no-store" }`: fetch fresh data for every request.
- `{ next: { revalidate: 60 } }`: revalidate cached data after 60 seconds.

Use caching carefully based on whether data is static, frequently updated, or user-specific.

This project enables `cacheComponents` and `partialPrefetching` in `next.config.mjs`; use their behavior according to the Next.js version and rendering mode.

## Learning Flow

1. Start on the `/` page.
2. Open `/blog` and inspect the blog links.
3. Open `/blog/1` and `/blog/2` to see dynamic routes.
4. Open `/contact`.
5. Open `/api/blogs`.
6. Add a loading, error, or not-found state.
7. Experiment with Server and Client Components.
8. Add metadata and deploy to Vercel.
