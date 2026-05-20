"use client";
import { Parisienne } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/utils";

const parisienne = Parisienne({
    variable: "--font-parisienne",
    subsets: ["latin"],
    weight: "400",
});

export default function Footer() {
    return (
        <div className="border-t border-black" id="contact">
            <motion.div
                className="container min-h-[calc(100vh-80px)] py-6 flex flex-col justify-between text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInAnimation}
            >
                <h4>
                    HAVE A PROJECT IN MIND?
                </h4>
                <motion.div
                    className="space-y-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >

                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                        LET'S CREATE
                        <span className="block">GREAT THINGS <span className={`${parisienne.className} italic text-4xl sm:text-5xl md:text-6xl xl:text-7xl`}>together</span>.</span>
                    </h1>
                    <Link target="_blank" href={"mailto:farreluken@gmail.com"} className="border-2 border-black px-8 py-3 sm:py-4 hover:bg-black hover:text-white transition-all duration-300">GET IN TOUCH</Link>
                </motion.div>
                <div className="flex justify-between flex-col items-center gap-5 sm:flex-row px-5">
                    <span className="text-sm text-gray-500">© 2025 Farrel Giovanni Jaohari. All rights reserved.</span>
                    <div className="flex items-center gap-5">
                        <Link target="_blank" href={"https://linkedin.com/in/farreljaohari"} className="text-sm text-gray-500 hover:text-black transition-all duration-300">LINKEDIN</Link>
                        <Link target="_blank" href={"https://github.com/MeongGanas"} className="text-sm text-gray-500 hover:text-black transition-all duration-300">GITHUB</Link>
                        <Link target="_blank" href={"https://instagram.com/farreljaoharii"} className="text-sm text-gray-500 hover:text-black transition-all duration-300">INSTAGRAM</Link>
                    </div>
                </div>
            </motion.div >
        </div >
    )
}