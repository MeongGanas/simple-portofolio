import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard() {
    return (
        <motion.div
            className="w-full max-w-120 border border-gray-400 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            <Image src={'/images/test.png'} width={0} height={0} alt="photo" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
            <div className="p-4 space-y-2">
                <h3 className="text-xl sm:text-2xl font-semibold">VeriCert</h3>
                <p className="text-gray-600 text-base sm:text-lg">Website for storing all digital certificates using blockchain.</p>
                <Link href={'/something'} className="hover:underline">Click for detail</Link>
            </div>
        </motion.div>
    )
}