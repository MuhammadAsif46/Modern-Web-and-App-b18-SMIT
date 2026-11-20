export async function GET() {
    const blogs = [
        { id: 1, title: "First Blog Post", content: "This is the content of the first blog post." },
        { id: 2, title: "Second Blog Post", content: "This is the content of the second blog post." }
    ];

    return Response.json({
        success: true,
        blogs
    });
}

export async function POST(request) {
    const body = await request.json();

    return Response.json({
        message: "Blog created successfully",
        blog: body
    });
}