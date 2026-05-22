"use client"
import { urlFor } from '@/lib/image';
import { Projects } from '@/sanity.types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Projects }) {
    return (
        <motion.div
            className="w-full max-w-120 border border-gray-400 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            <Image
                src={urlFor(project.thumbnail).url()}
                width={0}
                height={0}
                alt={project.title || ""}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
            <div className="p-4 space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 text-base sm:text-lg">{project.description}</p>
                <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 hover:underline text-base sm:text-lg">
                    <span>Click for detail</span>
                    <ArrowRight className='w-5 h-5' />
                </Link>
            </div>
        </motion.div>
    )
}