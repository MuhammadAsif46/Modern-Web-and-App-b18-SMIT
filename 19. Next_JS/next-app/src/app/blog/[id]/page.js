'use client'
import { useParams } from "next/navigation";
import { useState } from "react";

export default function SingleBlogPage() {
    const { id } = useParams();

    const [count, setCount] = useState(1);
    return (
        <div className="text-3xl bg-slate-700 text-amber-50">Single Blog Page {id}: {count}</div>
    )
}