"use client";
import AboutCard from "@/components/aboutCard";
import Skills from "@/components/skills";
import SocialButton from "@/components/socialButton";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const fadeInAnimation: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <>
      <div className="min-h-[calc(100vh-80px)] flex justify-center flex-col py-16" id="home">
        <motion.div
          className="container space-y-12 sm:space-y-16 px-5 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInAnimation}
        >
          <div className="space-y-6">
            <h4 className="text-lg text-gray-500">Hello,</h4>
            <h1 className="text-3xl sm:text-5xl xl:text-7xl font-semibold">
              I'm a Fullstack Web Developer and Cybersecurity Enthusiast.
            </h1>
          </div>
          <div className="flex items-center gap-5 justify-center">
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

      <div className="border-t border-black scroll-mt-20 min-h-[calc(100vh-80px)] py-16 px-5" id="projects">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation}
        >
          <h1 className="text-3xl sm:text-5xl font-semibold">Selected Projects</h1>
          <h1 className="text-center text-8xl mt-36">Soon.</h1>
        </motion.div>
      </div>

      <div className="min-h-[calc(100vh-80px)] border-t border-black px-5 py-16 scroll-mt-20" id="about">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
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
    </>
  );
}