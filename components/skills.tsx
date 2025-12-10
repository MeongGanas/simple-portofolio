import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"

const skills = [
    { name: "Next.js", src: "/nextdotjs.svg" },
    { name: "React", src: "/react.svg" },
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "Tailwind CSS", src: "/tailwindcss.svg" },
    { name: "Shadcn UI", src: "/shadcnui.svg" },
    { name: "Supabase", src: "/supabase.svg" },
    { name: "Laravel", src: "/laravel.svg" },
    { name: "PHP", src: "/php.svg" },
    { name: "MySQL", src: "/mysql.svg" },
]

export default function Skills() {
    return (
        <ul className="flex flex-wrap justify-evenly gap-10">
            {skills.map((skill) => (
                <li key={skill.name}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Image src={skill.src} width={75} height={75} alt={skill.name} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{skill.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </li>
            ))}
        </ul>
    )
}