"use client"
import ProjectCard from '@/components/projectCard';
import { motion, Variants } from 'framer-motion'

export default function ProjectsPage() {
    const fadeInAnimation: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };

    return (
        <div className="border-t border-black scroll-mt-20 min-h-[calc(100vh-80px)] py-16 px-5 flex items-center" id="projects">
            <motion.div
                className="container space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInAnimation}
            >
                <h1 className="text-3xl sm:text-5xl font-semibold">All Projects</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </motion.div>
        </div>
    )
}