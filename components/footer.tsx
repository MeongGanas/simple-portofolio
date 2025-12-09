import Link from "next/link";

export default function Footer() {
    return (
        <div className="border-t border-black py-6" id="contact">
            <div className="container space-y-24">
                <div className="text-center space-y-10 md:space-y-16">
                    <h4>
                        HAVE A PROJECT IN MIND?
                    </h4>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
                        LET'S CREATE
                        <span className="block">GREAT THINGS <span className={"italic"}>together</span>.</span>
                    </h1>
                    <Link target="_blank" href={"mailto:farreluken@gmail.com"} className="border border-black px-8 py-3 sm:py-4">GET IN TOUCH</Link>
                </div>
                <div className="flex justify-between flex-col items-center gap-5 sm:flex-row px-5">
                    <span className="text-sm text-gray-500">© 2025 Farrel Giovanni Jaohari. All rights reserved.</span>
                    <div className="flex items-center gap-5">
                        <Link target="_blank" href={"https://linkedin.com/in/farreljaohari"} className="text-sm text-gray-500">LINKEDIN</Link>
                        <Link target="_blank" href={"https://github.com/MeongGanas"} className="text-sm text-gray-500">GITHUB</Link>
                        <Link target="_blank" href={"https://instagram.com/farreljaoharii"} className="text-sm text-gray-500">INSTAGRAM</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}