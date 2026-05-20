"use client"
import { fadeInAnimation } from '@/lib/utils';
import { motion } from 'framer-motion'

export default function ProjectWrapper({ children }: { children: React.ReactNode; }) {
    return (
        <motion.div
            className="container space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation}
        >
            {children}
        </motion.div>
    )
}