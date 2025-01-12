import Link from "next/link"

export default function AboutUs() {
    return (
    <main>
        <h1>About</h1>
        <p><Link href="/">Home</Link></p>
    </main>
    )
}

/* 
Next.js is a popular React framework that offers a wide range of features and benefits for modern web development. Here are the key reasons to use Next.js:

1. Server-Side Rendering (SSR)
Next.js supports server-side rendering, which allows pages to be pre-rendered on the server and sent to the browser. This improves:

 * SEO, as search engines can easily index pre-rendered content.
 * Performance by reducing the time to first render.
  
2. Static Site Generation (SSG)
With SSG, Next.js can generate static HTML at build time, resulting in fast-loading pages. 
This is great for blogs, documentation, or e-commerce sites with mostly static content.

3. Client-Side Rendering (CSR)
You can use CSR for dynamic parts of your application, giving you flexibility in how you load and display data.

4. Hybrid Rendering
Next.js allows you to mix SSR, SSG, and CSR within the same application. 
You can choose the best rendering strategy for each page or route.

5. API Routes
You can create backend APIs directly within your Next.js application using API routes. 
This eliminates the need for a separate backend service for simple use cases.

6. Built-In Performance Optimizations
Next.js comes with optimizations like:

 * Image optimization via the next/image component.
 * Code splitting and lazy loading to reduce initial bundle size.
 * Automatic static optimization for static pages.

*/