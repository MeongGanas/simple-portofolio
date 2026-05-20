import ProjectCard from '@/components/project/projectCard';
import ProjectWrapper from '@/components/project/projectWrapper';
import { Projects } from '@/sanity.types';
import { client } from '@/sanity/lib/client';

const PROJECTS_QUERY = `*[_type == "projects"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    thumbnail
}`;

export default async function ProjectsPage() {
    const projects = await client.fetch(PROJECTS_QUERY);

    return (
        <div className="border-t border-black scroll-mt-20 min-h-[calc(100vh-80px)] py-16 px-5 flex items-center" id="projects">
            <ProjectWrapper>
                <h1 className="text-3xl sm:text-5xl font-semibold">All Projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
                    {projects.map((project: Projects) => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </div>
            </ProjectWrapper>
        </div>
    )
}