import Image from "next/image";

export default function Home() {
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

          <button className="border-[1px] border-Primary text-white px-2 py-1  hover:bg-[#483b55] duration-500 text-sm font-normal">
            {" "}
            Contact me!!
          </button>
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

      <div></div>
    </main>
  );
}
