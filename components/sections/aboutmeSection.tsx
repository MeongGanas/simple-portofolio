"use client"
import { fadeInAnimation } from "@/lib/utils";
import { motion } from 'framer-motion'
import AboutCard from "../aboutCard";
import Skills from "../skills";

export default function AboutMeSection() {
    return (
        <div className="border-t border-black px-5 py-16 scroll-mt-20" id="about">
            <div className="container space-y-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInAnimation}
                >
                    <h1 className="text-3xl sm:text-5xl font-semibold mb-10">About Me</h1>
                    <p className="text-lg sm:text-2xl text-gray-500 space-y-5">
                        <span className="block">
                            I’m a Computer Science student at Universitas Hasanuddin with a relentless curiosity for building scalable and efficient web systems.
                        </span>
                        <span className="block">
                            My core passion lies in Full-Stack Web Development. I specialize in crafting seamless user experiences using React and Next.js, while architecting robust backends with Laravel or Next.js. I enjoy the entire development lifecycle—from designing intuitive interfaces to optimizing database queries and API performance.
                        </span>
                        <span className="block">
                            I am a problem solver at heart, always eager to learn new technologies and translate complex requirements into clean, maintainable code. I am looking for the next challenge to build something impactful.
                        </span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 overflow-x-hidden">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-4xl font-semibold">Experience</h2>
                        <AboutCard
                            title="Fullstack Web Developer Intern"
                            subtitle="PT. Celebes Solusi Digital"
                            date="November 2024 - February 2025"
                            description="Developed a custom Laravel CMS to manage landing page content and enhance customer engagement using Laravel."
                        />
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-4xl font-semibold">Education</h2>
                        <AboutCard title="Universitas Hasanuddin" subtitle="Computer Science" date="August 2025 - Present" />
                    </motion.div>
                </div>

                <motion.div
                    className="space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInAnimation}
                >
                    <h2 className="text-2xl sm:text-4xl font-semibold">Skills</h2>
                    <Skills />
                </motion.div>
            </div>
        </div>
    )
}