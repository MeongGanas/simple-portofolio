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

const SINGLE_PROJECT_QUERY = `*[_type == "projects" && slug.current == $slug][0] {
    title,
    thumbnail,
    core_code,
    image_1,
    image_2,
    body,
    publishedAt,
    link
}`;

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project: Projects = await client.fetch(SINGLE_PROJECT_QUERY, { slug });
    console.log(project)

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                        <Image
                            src={urlFor(project.image_1).url()}
                            width={0}
                            height={0}
                            alt={project.title || ""}
                            sizes="100vw"
                            className="w-full"
                        />
                        <Image
                            src={urlFor(project.image_2).url()}
                            width={0}
                            height={0}
                            alt={project.title || ""}
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <p className="text-gray-600 gap-1">
                        Website link:
                        <Link href={project.link ?? ""} target="_blank" className="underline hover:opacity-70 transition">{project.link}</Link>
                    </p>
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