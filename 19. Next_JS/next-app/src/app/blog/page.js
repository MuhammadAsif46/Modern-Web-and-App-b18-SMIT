import Link from "next/link"


export default function BlogPage() {

    const blogs = [
        {
            id: 1,
            title: "Blog 1",
            description: "This is the first blog post."
        },
        {
            id: 2,
            title: "Blog 2",
            description: "This is the second blog post."
        },
    ]

    return (
        <div className="text-3xl bg-slate-700 text-amber-50">
            <h1>Blog Page</h1>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>
                        <Link href={`/blog/${blog.id}`} className="text-3xl underline">
                            {blog.title}
                        </Link>
                    </h2>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    )
}

export const metadata = {
    title: 'Blog Page',
    description: 'This is the blog page of the application.',
}