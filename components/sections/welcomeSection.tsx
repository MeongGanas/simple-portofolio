"use client"
import { fadeInAnimation } from "@/lib/utils";
import { motion } from 'framer-motion'
import SocialButton from "../socialButton";

export default function WelcomeSection() {
    return (
        <div className="min-h-screen flex justify-center flex-col py-16" id="home">
            <motion.div
                className="container space-y-12 sm:space-y-16 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeInAnimation}
            >
                <div className="space-y-6">
                    <h4 className="text-lg text-gray-500">Hello,</h4>
                    <h1 className="text-4xl sm:text-5xl xl:text-7xl font-semibold">
                        I'm a Fullstack Web Developer and Cybersecurity Enthusiast.
                    </h1>
                </div>
                <div className="flex items-center gap-3 sm:gap-5 justify-center">
                    <motion.div
                        className="flex gap-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <SocialButton href={"https://linkedin.com/in/farreljaohari"} label="LinkedIn" />
                        <SocialButton href={"https://github.com/MeongGanas"} label="Github" />
                        <SocialButton href={"https://instagram.com/farreljaoharii"} label="Instagram" />
                        <SocialButton href={"mailto:farreluken@gmail.com"} label="Mail" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}