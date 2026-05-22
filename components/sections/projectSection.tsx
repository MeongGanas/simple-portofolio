import Link from "next/link";
import ProjectCard from "../project/projectCard";
import ProjectWrapper from "../project/projectWrapper";
import { client } from "@/sanity/lib/client";
import { Projects } from "@/sanity.types";

const PROJECTS_QUERY = `*[_type == "projects"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    description,
    thumbnail
}`;

export default async function ProjectSection() {
    const projects = await client.fetch(PROJECTS_QUERY);

    return (
        <div className="border-t border-black scroll-mt-20 min-h-[calc(100vh-80px)] py-16 px-5 flex items-center" id="projects">
            <ProjectWrapper>
                <h1 className="title">Recent Projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
                    {projects.map((project: Projects) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
                <Link href={"/projects"} className="block w-fit mx-auto border-2 border-black px-8 py-3 sm:py-4 hover:bg-black hover:text-white transition-all duration-300">All Projects</Link>
            </ProjectWrapper>
        </div >
    )
}