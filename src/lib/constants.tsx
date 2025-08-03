import { Button, WorkCard } from "@/components";
import {
  SiBootstrap,
  SiCss3,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export const techStack = [
  { icon: <SiReact />, label: "React js" },
  { icon: <SiNodedotjs />, label: "Node js" },
  { icon: <SiMongodb />, label: "Mongo DB" },
  { icon: <SiSupabase />, label: "Supabase" },
  { icon: <SiPython />, label: "Python" },
  { icon: <SiLinux />, label: "Linux" },
  {
    icon: <SiNextdotjs />,
    label: "Next js",
  },
  {
    icon: <SiTailwindcss />,
    label: "Tailwind",
  },
  {
    icon: <SiBootstrap />,
    label: "Bootstrap",
  },
  {
    icon: <SiShadcnui />,
    label: "Shadcn UI",
  },
  {
    icon: <SiThreedotjs />,
    label: "Three js",
  },

  {
    icon: <SiTypescript />,
    label: "Typescript",
  },
  {
    icon: <SiPostgresql />,
    label: "Postgresql",
  },
  {
    icon: <SiFramer />,
    label: "Framer",
  },
  {
    icon: <SiGit />,
    label: "Git",
  },
  {
    icon: <SiNetlify />,
    label: "Netlify",
  },
];

export const workContent = [
  {
    title: "Attendance System",
    description:
      "Effortlessly track attendance using geolocation. Our system allows users to check in with a single tap, automatically verifying their presence at the correct location. Say goodbye to manual roll calls and streamline attendance management with real-time, location-based accuracy. Currently under development.",
    icon: (
      <a href={"https://github.com/Adjei-Kuranchie/Unitrack"} target="_blank">
        <Button variant={"secondary"} className="w-8 h-8 p-0">
          <SiGithub className="w-4 h-4" />
        </Button>
      </a>
    ),
    content: (
      <WorkCard
        iconList={[SiTypescript, SiReact, SiTailwindcss]}
        alt="Unitrack"
      />
    ),
  },
  {
    title: "Fitness App",
    description:
      "A fitness app with real fitness exercises from ExerciseDB to help train a specificarea or part of the body and also provides related youtube videos on how that part of the body is trained",
    icon: (
      <a
        href={"https://github.com/Adjei-Kuranchie/fitness-app"}
        target="_blank"
      >
        <Button variant={"secondary"} className="w-8 h-8 p-0">
          <SiGithub className="w-4 h-4" />
        </Button>
      </a>
    ),

    content: (
      <WorkCard
        iconList={[SiReact, SiVite, SiTailwindcss]}
        alt="Unitrack"
        liveUrl="https://adjei-fitness-app-with-rapidapi.netlify.app"
        image="/fitness_app.jpeg"
      />
    ),
  },
  {
    title: "2D Portfolio",
    description:
      "2D portfolio made with HTML5, CSS3,Javascript using Kaboom.js",
    icon: (
      <a
        href={"https://github.com/Adjei-Kuranchie/2D-Portfolio-With-Kaboom.js"}
        target="_blank"
      >
        <Button variant={"secondary"} className="w-8 h-8 p-0">
          <SiGithub className="w-4 h-4" />
        </Button>
      </a>
    ),
    content: (
      <WorkCard
        iconList={[SiHtml5, SiCss3, SiJavascript]}
        alt="Unitrack"
        liveUrl="https://adjei-portfolio-with-kaboomjs.netlify.app/"
        image="/portfolio_kaboom.jpeg"
      />
    ),
  },
];

export const calenderData = [
  {
    title: "2019 - University Beginnings",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I began my academic journey at the University of Cape Coast, Ghana,
          enrolling in a BSc. program in Computer Science. It marked the
          beginning of my formal training in problem-solving, programming, and
          systems thinking.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          This was a transformative year that sparked my curiosity about
          cybersecurity, networks, and software development.
        </p>
      </div>
    ),
  },
  {
    title: "2023 - CyberTeq CTF Competition",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I secured 4th place in the 2024 Capture The Flag (CTF) cybersecurity
          competition organized by CyberTeq, facing very strong problem-solving
          competitors.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          The competition tested skills in digital forensics, web exploitation,
          cryptography, and network security. It solidified my passion for
          ethical hacking and cyber defense.
        </p>
      </div>
    ),
  },
  {
    title: "2025 - CyberTeq CTF Competition",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          We secured 3rd place in the 2025 Capture The Flag (CTF) cybersecurity
          competition organized by CyberTeq during the CITSA Week for our
          department.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          The competition tested skills in digital forensics, web exploitation
          and cryptography.This competition made me realize that I am not fit
          for Ethical Hacking since it is too brain-intensive.
        </p>
      </div>
    ),
  },
  {
    title: "2025 - Graduation from UCC",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I graduated from the University of Cape Coast with a Bachelor&apos;s
          degree in Computer Science. The years of hands-on experience, group
          projects, and individual challenges shaped my technical and teamwork
          capabilities.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I emerged with a deep interest in cybersecurity, web technologies, and
          systems engineering—ready to take on the tech world with a strong
          foundation.
        </p>
      </div>
    ),
  },
];
