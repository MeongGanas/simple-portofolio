import Link from "next/link";

export default function SocialButton({ href, label }: { href: string, label: string }) {
    return (
        <Link target="_blank" href={href} className="border-2 border-black py-1 px-3 hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base">{label}</Link>
    )
}