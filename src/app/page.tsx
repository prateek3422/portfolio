import Image from "next/image";

export default function Home() {
  return (
    <main className=" mt-20 mx-auto w-[65%]">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col items-start justify-center gap-4">
          <p className=" text-white text-lg font-semibold">
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

        <div className="relative">
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
    </main>
  );
}
