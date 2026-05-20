import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

const SINGLE_PROJECT_QUERY = `*[_type == "projects" && slug.current == $slug][0] {
    title,
    core_code_image,
    image_1,
    image_2,
    body,
    publishedAt
}`;

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project = await client.fetch(SINGLE_PROJECT_QUERY, { slug });
    console.log(project)

    if (!project) {
        notFound();
    }

    return (
        <div className="container min-h-[calc(100vh-80px)] py-10 px-5">
            <h1 className="text-3xl sm:text-5xl font-semibold mb-10">{project.title}</h1>
        </div>
    )
}