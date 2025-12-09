import AboutCard from "@/components/aboutCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-end flex-col py-20" id="home">
        <div className="container space-y-16 px-5">
          <div className="space-y-6">
            <h4 className="text-lg text-gray-500">Hello,</h4>
            <h1 className="text-3xl sm:text-5xl xl:text-7xl font-semibold">I'm Farrel, a Fullstack Web Developer and Cybersecurity Enthusiast.</h1>
          </div>
          <div className="flex items-center gap-5">
            <Link target="_blank" href={"https://linkedin.com/in/farreljaohari"} className="border border-black py-1 px-3 hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base">LinkedIn</Link>
            <Link target="_blank" href={"https://github.com/MeongGanas"} className="border border-black py-1 px-3 hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base">Github</Link>
            <Link target="_blank" href={"https://instagram.com/farreljaoharii"} className="border border-black py-1 px-3 hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base">Instagram</Link>
            <Link target="_blank" href={"mailto:farreluken@gmail.com"} className="border border-black py-1 px-3 hover:bg-black hover:text-white transition-all duration-300 text-sm sm:text-base">Mail</Link>
          </div>
        </div>
      </div>

      <div className="min-h-screen border-t border-black py-20 px-5" id="projects">
        <div className="container">
          <h1 className="text-3xl sm:text-5xl font-semibold">Selected Projects</h1>

          <h1 className="text-center text-8xl mt-36">Soon.</h1>
        </div>
      </div>

      <div className="border-t border-black px-5 py-20" id="about">
        <div className="container space-y-10">
          <h1 className="text-3xl sm:text-5xl font-semibold">About Me</h1>
          <p className="text-lg sm:text-2xl text-gray-500 space-y-5">
            <span className="block">
              I’m a Computer Science student at Universitas Hasanuddin with a relentless curiosity for how systems work—from the high-level web interface down to the binary level.

              My core passion lies in Cybersecurity. I am an active Capture The Flag (CTF) player, where I spend my time solving complex challenges in Reverse Engineering, Cryptography, and Web Exploitation. I enjoy the process of deconstructing C binaries, analyzing boot sectors, or crafting scripts in Python to break encryption schemes.
            </span>

            <span className="block">
              Beyond security, I am a capable developer with a strong foundation in Python and modern web technologies like Next.js, React, and Laravel.
              I am always looking for the next challenge to solve. Let's connect!
            </span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-4xl font-semibold">Experience</h2>

              <AboutCard title="Fullstack Web Developer Intern" subtitle="PT. Celebes Solusi Digital" date="November 2024 - February 2025" description="Developed a custom Laravel CMS to manage landing page content and enhance customer engagement using Laravel." />
            </div>
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-4xl font-semibold">Education</h2>

              <AboutCard title="Universitas Hasanuddin" subtitle="Computer Science" date="August 2025 - Present" />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl sm:text-4xl font-semibold">Skills</h2>
            <ul className="flex flex-wrap justify-evenly gap-10">
              <li>
                <Image src={"/nextdotjs.svg"} width={75} height={75} alt="Nextjs" />
              </li>
              <li>
                <Image src={"/react.svg"} width={75} height={75} alt="React" />
              </li>
              <li>
                <Image src={"/typescript.svg"} width={75} height={75} alt="Typescript" />
              </li>
              <li>
                <Image src={"/tailwindcss.svg"} width={75} height={75} alt="Tailwind CSS" />
              </li>
              <li>
                <Image src={"/shadcnui.svg"} width={75} height={75} alt="Shadcn UI" />
              </li>
              <li>
                <Image src={"/supabase.svg"} width={75} height={75} alt="Supabase" />
              </li>
              <li>
                <Image src={"/laravel.svg"} width={75} height={75} alt="Laravel" />
              </li>
              <li>
                <Image src={"/php.svg"} width={75} height={75} alt="PHP" />
              </li>
              <li>
                <Image src={"/mysql.svg"} width={75} height={75} alt="MySQL" />
              </li>
              <li>
                <Image src={"/supabase.svg"} width={75} height={75} alt="Supabase" />
              </li>
              <li>
                <Image src={"/python.svg"} width={75} height={75} alt="Python" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
