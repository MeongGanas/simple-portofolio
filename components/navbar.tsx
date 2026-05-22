"use client"
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";

export default function Navbar() {
    return (
        <div className="border-b border-black  py-6 fixed top-0 left-0 w-full bg-white z-40">
            <div className="container flex items-center justify-between">
                <Link href={'/'} className="font-semibold text-2xl">Farrel Giovanni Jaohari</Link>

                <nav className="hidden sm:block">
                    <ul className="flex items-center gap-5">
                        <li>
                            <Link href={'/projects'} className="text-lg">Projects</Link>
                        </li>
                        <li>
                            <Link href={'/#about'} className="text-lg">About</Link>
                        </li>
                        <li>
                            <Link href={'/#resume'} className="text-lg">Resume</Link>
                        </li>
                        <li>
                            <Link href={'#contact'} className="text-lg bg-black border-2 border-black text-white px-4 py-2 hover:bg-white hover:text-black transition-all duration-300">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="block sm:hidden">
                    <Hamburger />
                </div>
            </div>
        </div>
    )
}

function Hamburger() {
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="flex flex-col gap-2 cursor-pointer">
                    <span className="bg-black w-7 h-0.5 block"></span>
                    <span className="bg-black w-7 h-0.5 block"></span>
                </button>
            </SheetTrigger>
            <SheetContent className="p-5">
                <SheetHeader>
                    <SheetTitle className="font-normal text-2xl">Farrel Giovanni Jaohari</SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-10 mt-10">
                    <li>
                        <Link
                            href={'#projects'}
                            onClick={() => setOpen(false)}
                            className="text-lg flex gap-3 text-gray-600 hover:text-black transition-all duration-300"
                        >
                            <span className="text-xs text-gray-400 mt-2">01</span>Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'#about'}
                            onClick={() => setOpen(false)}
                            className="text-lg flex gap-3 text-gray-600 hover:text-black transition-all duration-300"
                        >
                            <span className="text-xs text-gray-400 mt-2">02</span>About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'#resume'}
                            onClick={() => setOpen(false)}
                            className="text-lg flex gap-3 text-gray-600 hover:text-black transition-all duration-300"
                        >
                            <span className="text-xs text-gray-400 mt-2">03</span>Resume
                        </Link>
                    </li>
                </ul>
                <Link href={'#contact'} className="border-black border p-3 text-center mt-auto hover:bg-black hover:text-white transition-all duration-300">Contact</Link>
            </SheetContent>
        </Sheet>
    )
}