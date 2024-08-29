import Button from "@/components/Button/Button";
import Cards from "@/components/Cards/cards";
import SkillCard from "@/components/SkillCard/SkillCard";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      tags: "HTML, CSS, Python, Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: "/Rectangle 22 (1).png",
    },
    {
      tags: "HTML, CSS, Python, Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: "/Rectangle 22 (1).png",
    },
    {
      tags: "HTML, CSS, Python, Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: "/Rectangle 22 (1).png",
    },
    {
      tags: "HTML, CSS, Python, Flask",
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      image: "/Rectangle 22 (1).png",
    },
  ];

  const skill = [
    {
      skillName: "Languages",
      skill: "JavaScript, TypeScript",
    },
    {
      skillName: "frameworks",
      skill: "React Express.js",
    },
    {
      skillName: "Database",
      skill: "Mongo, PostgreSQL",
    },
    {
      skillName: "Tools",
      skill: "Git, VS Code, Figma ",
    },
    {
      skillName: "others",
      skill: " Html css, Tailwind, Rest api ",
    },
  ];

  return (
    <main className=" mt-20 mx-auto w-[70%]">
      <div className="grid  md:grid-cols-2 gap-8 md:gap-4 min-h-[calc(100vh-180px)]">
        <div className="flex flex-col items-start mt-8 gap-4">
          <p className=" text-white text-[1.4rem] font-bold">
            Prateek is a <span className="text-Primary">Software Engineer</span>{" "}
            and a <span className="text-Primary">Full Stack Developer.</span>
          </p>
          <p className="text-Secondary text-xs font-medium mt-2">
            He crafts responsive websites where technologies meet creativity
          </p>

          <Button> Contact me!! </Button>
        </div>

        <div className="relative h-max w-max mx-auto">
          <Image
            src="/Style=Outline.svg"
            alt="hero-left-img"
            width={400}
            height={400}
            className="  absolute top-8 left-0 w-40 -z-10"
          />
          <Image src="/Image.svg" alt="Prateek" width={400} height={400} />
          <Image
            src="/Dots.svg"
            alt="Prateek"
            width={400}
            height={400}
            className="  absolute bottom-14 right-4 w-16 z-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-white text-xl font-bold  w-max ">
            <span className="text-Primary">#</span>Projects
          </h1>
          <div className="w-[30vw] h-[2px] bg-Primary  "></div>
        </div>

        <button className="flex items-center gap-2">
          view all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </button>
      </div>
      <div className="flex gap-4 justify-center items-center flex-wrap md:flex-nowrap">
        <Cards {...projects[0]} />
        <Cards {...projects[1]} />
        <Cards {...projects[2]} />
      </div>

      <div className="flex items-center gap-4 justify-between mt-8  ">
        <div className="flex items-center gap-4">
          <h1 className="text-white text-xl font-bold  w-max ">
            <span className="text-Primary">#</span>Skills
          </h1>
          <div className="w-[30vw] h-[2px] bg-Primary  "></div>
        </div>
      </div>

      <div className="flex  gap-4  justify-between items-center mt-4">
        <div className=" hidden md:block">
          <img src="/Group36.svg" alt="Prateek" width={400} height={400} />
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {skill.map((skill, index) => {
            return (
              <SkillCard
                key={index}
                skillName={skill.skillName}
                Skills={skill.skill}
              />
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between mt-8">
        <div className="flex items-center gap-4">
          <h1 className="text-white text-xl font-bold  w-max ">
            <span className="text-Primary">#</span>About-me
          </h1>
          <div className="w-[30vw] h-[2px] bg-Primary  "></div>
        </div>
      </div>

      <div className="grid  md:grid-cols-2 gap-8 md:gap-4 ">
        <div className="flex flex-col items-start mt-8 gap-4">
          <h1 className="text-Secondary ">Hello, i’m Elias!</h1>
          <p className="text-Secondary ">
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p className="text-Secondary ">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>

          <Button className="flex gap-2 items-center">
            {" "}
            Read More <MoveRight />{" "}
          </Button>
        </div>

        <div className="relative h-max w-max mx-auto">
          <Image
            src="/Style=Outline.svg"
            alt="hero-left-img"
            width={400}
            height={400}
            className="  absolute top-8 left-0 w-40 -z-10"
          />
          <Image src="/Image.svg" alt="Prateek" width={400} height={400} />
          <Image
            src="/Dots.svg"
            alt="Prateek"
            width={400}
            height={400}
            className="  absolute bottom-14 right-4 w-16 z-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between mt-8">
        <div className="flex items-center gap-4">
          <h1 className="text-white text-xl font-bold  w-max ">
            <span className="text-Primary">#</span>Contact me
          </h1>
          <div className="w-[30vw] h-[2px] bg-Primary  "></div>
        </div>
      </div>

      <div className="grid  md:grid-cols-2 gap-8 md:gap-8 mt-4">
        <p className="text-Secondary text-lg font-medium">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>

        <div className="border-2 border-Secondary rounded-lg p-4 flex flex-col  justify-center items-center mx-auto">
          <h1>Massage me here</h1>
          <div className="flex items-center gap-4">
            <img src="/Discord.svg" alt="disord" />
            <p className="text-Secondary text-xs font-medium ">prateek04312</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/twitter.svg" alt="disord" />
            <p className="text-Secondary text-xs font-medium ">prateek04312</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/linkedin.svg" alt="disord" />
            <p className="text-Secondary text-xs font-medium ">prateek04312</p>
          </div>
        </div>
      </div>
    </main>
  );
}
