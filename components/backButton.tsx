"use client"

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter();

    return (
        <button className="flex items-center gap-2 hover:opacity-70 transition text-gray-600 w-full border border-gray-400 px-5 py-4 text-left text-lg" onClick={() => router.back()}>
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
        </button>
    )
}