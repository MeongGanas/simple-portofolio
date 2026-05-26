import ProjectCard from '@/components/project/projectCard';
import ProjectWrapper from '@/components/project/projectWrapper';
import { PROJECTS_QUERY } from '@/lib/query';
import { Projects } from '@/sanity.types';
import { client } from '@/sanity/lib/client';

export default async function ProjectsPage() {
    const projects = await client.fetch(
        PROJECTS_QUERY,
        {},
        { next: { tags: ['projects'] } }
    );

    return (
        <div className="scroll-mt-20 min-h-screen py-28 px-5 flex items-center" id="projects">
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