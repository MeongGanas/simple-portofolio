import { urlFor } from "@/lib/image";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Projects } from "@/sanity.types";
import BackButton from "@/components/backButton";
import { codeToTokens } from 'shiki';
import CodeBlockRenderer from "@/components/project/blockCode";
import ProjectWrapper from "@/components/project/projectWrapper";
import { format } from 'date-fns'

const SINGLE_PROJECT_QUERY = `*[_type == "projects" && slug.current == $slug][0] {
    title,
    thumbnail,
    core_code,
    image_1,
    image_2,
    body,
    publishedAt,
    start_date,
    finish_date,
    deploy_link
}`;

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project: Projects = await client.fetch(SINGLE_PROJECT_QUERY, { slug });

    const tokens = await codeToTokens(project.core_code?.code ?? "", {
        lang: (project.core_code?.language ?? "javascript") as any,
        theme: 'github-light'
    });
    const plainTokens = JSON.parse(JSON.stringify(tokens));

    if (!project) {
        notFound();
    }

    return (
        <div className="py-28">
            <ProjectWrapper>
                <h1 className="title">{project.title}</h1>
                <div className="mb-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
                        <Image
                            src={urlFor(project.image_1).url()}
                            width={0}
                            height={0}
                            alt={project.title || ""}
                            sizes="100vw"
                            className="w-full border aspect-video object-cover"
                        />
                        <Image
                            src={urlFor(project.image_2).url()}
                            width={0}
                            height={0}
                            alt={project.title || ""}
                            sizes="100vw"
                            className="w-full border aspect-video object-cover"
                        />
                    </div>
                    <div className="flex justify-between w-full">
                        <p className="text-gray-600 flex items-center gap-1">
                            <span className="block">Website link:</span>
                            <Link href={project.deploy_link ?? ""} target="_blank" className="underline hover:opacity-70 transition">{project.deploy_link}</Link>
                        </p>
                        <p className="text-gray-600 flex items-center gap-1">
                            {format(project.start_date ?? "", 'dd-MM-y')} - {format(project.finish_date ?? "", 'dd-MM-y')}
                        </p>
                    </div>
                </div>

                <div className="space-y-2 mb-5">
                    {project.body?.slice(0, -2).map((content) => (
                        <p key={content._key} className="text-gray-600 text-base lg:text-lg text-justify">
                            {content.children && content.children.map((child) => {
                                return child.text;
                            })}
                        </p>
                    ))}

                    <CodeBlockRenderer tokens={plainTokens} />

                    <p className="text-gray-600 text-base lg:text-lg text-justify">
                        {project.body &&
                            project.body[project.body.length - 2]?.children?.map((child: any) => child.text)}
                    </p>
                    <p className="text-gray-600 text-base lg:text-lg text-justify">
                        {project.body &&
                            project.body[project.body.length - 1]?.children?.map((child: any) => child.text)}
                    </p>
                </div>
                <BackButton />
            </ProjectWrapper>
        </div>
    )
}