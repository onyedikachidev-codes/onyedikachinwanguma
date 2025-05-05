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
    <main className="w-full max-w-none">
      <section
        id="home"
        className="flex flex-col-reverse xl:flex-row xl:mt-24 mt-1 xl:gap-10 md:gap-16 gap-4 xl:ml-10 md:ml-10 ml-2 lg:mb-6 lg:min-h-[90dvh] min-h-[99dvh]"
      >
        <div className="xl:mt-20 md:mt-16 mt-10 xl:max-w-[48%] md:max-w-[80%] max-w-[98%] mx-8 xl:mx-0 xl:ml-24  lg:ml-24 md:ml-16">
          <div className="text-xl tracking-widest text-gray-700">
            Hey! I&apos;m{" "}
            <div className="mt-1 w-12 h-[0.13rem] bg-gray-500"></div>
          </div>

          <h3 className="text-2xl font-semibold mt-6 uppercase lg:text-3xl xl:text-2xl">
            Onyedikachi Nwanguma
          </h3>

          <h4 className="text-xl lg:text-2xl xl:text-xl text-gray-700 font-medium mt-[0.16rem]">
            Junior Frontend Engineer
          </h4>
          <p className="mt-5 text-gray-600 lg:text-xl xl:text-base">
            I&apos;m a Junior Frontend Engineer with hands-on experience in
            building responsive, user-focused web interfaces using HTML, CSS,
            JavaScript, TypeScript, and React. I have a strong foundation in
            computer science and a working knowledge of backend technologies,
            enabling me to contribute effectively across the stack.
          </p>

          <div className="flex gap-2 items-end mt-3">
            <Link
              href="mailto:nwangumabimma@gmail.com"
              className="bg-black hover:bg-gray-800 text-gray-50 rounded-full py-3 md:px-6 px-3 uppercase mt-4 text-xs"
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

        <div className="mx-auto xl:mx-0 xl:mt-8">
          <Image
            src={dp}
            alt="developer image"
            height={400}
            width={400}
            quality={90}
            className="rounded-full mt-24 sm:mt-0 object-cover xl:h-[23rem] xl:w-[23rem] lg:h-[38rem] lg:w-[38rem] md:h-[28rem] md:w-[28rem] h-[20rem] w-[20rem]"
          />
        </div>
      </section>

      <section className="w-full min-h-[80dvh] lg:min-h-[80%] lg:mb-32">
        <div id="about" className="mb-20">
          &nbsp;
        </div>
        <About />
      </section>

      <section className="w-full">
        <div id="skills" className="mb-20 md:mb-10 xl:mb-20">
          &nbsp;
        </div>
        <Skills />
      </section>

      <section className="lg:min-h-[70dvh] min-h-screen mb-12 w-full">
        <Projects />
      </section>
    </main>
  );
}
