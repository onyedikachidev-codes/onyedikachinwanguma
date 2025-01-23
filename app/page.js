import Image from "next/image";
import dp from "@/public/my_image.jpg";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Skills from "./_components/Skills";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section id="home" className="flex mt-24 gap-16 ml-32 h-[99dvh]">
        <div className="mt-16 max-w-[52%]">
          <div className="text-xl tracking-widest text-gray-700">
            Hey! I&apos;m{" "}
            <div className="mt-1 w-12 h-[0.13rem] bg-gray-500"></div>
          </div>

          <h3 className="text-2xl font-semibold mt-6 uppercase">
            Onyedikachi Nwanguma
          </h3>

          <h4 className="text-xl text-gray-700 font-medium mt-[0.16rem]">
            A Frontend Engineering Intern
          </h4>
          <p className="mt-5 text-gray-600">
            Enthusiastic aspiring frontend developer with foundational skills in
            HTML, CSS, JavaScript, and React. Experienced in building responsive
            layouts and a deeply rooted foundation in computer science for
            creative problem-solving.
          </p>

          <div className="flex gap-2 items-end mt-3">
            <Link
              href="mailto:nwangumabimma@gmail.com"
              className="bg-black hover:bg-gray-800 text-gray-50 rounded-full py-3 px-6 uppercase mt-4 text-xs"
            >
              Contact Me
            </Link>

            <Link
              href="https://github.com/onyedikachidev-codes"
              className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center ml-2"
            >
              <FaGithub className="h-6 w-6 text-gray-700 " />
            </Link>

            <Link
              href="https://www.linkedin.com/in/onyedikachi-nwanguma/"
              className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center"
            >
              <CiLinkedin className="h-6 w-6 text-gray-700" />
            </Link>

            <Link
              href="https://x.com/Mannie799"
              className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center"
            >
              <FaXTwitter className="h-5 w-5 text-gray-700" />
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Image
            src={dp}
            alt="developer image"
            height={400}
            width={400}
            quality={90}
            className="rounded-full object-cover h-[23rem] w-[23rem]"
          />
        </div>
      </section>

      <section className="min-h-screen">
        <div id="about" className="mb-20">
          &nbsp;
        </div>
        <About />
      </section>

      <section className="min-h-screen">
        <div id="skills" className="mb-20">
          &nbsp;
        </div>
        <Skills />
      </section>

      <section className="min-h-screen mb-12 ">
        <Projects />
      </section>
    </main>
  );
}
