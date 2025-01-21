import Image from "next/image";
import dp from "@/public/my_image.jpg";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Page() {
  return (
    <main>
      <section className="flex mt-12 gap-20 ml-36 min-h-screen">
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
            <button className="bg-black text-gray-50 rounded-full py-3 px-6 uppercase mt-4 text-xs">
              Contact Me
            </button>
            <div className="rounded-full h-12 w-12 border border-gray-500  flex items-center justify-center ml-2">
              <FaGithub className="h-6 w-6 text-gray-700" />
            </div>
            <div className="rounded-full h-12 w-12 border border-gray-500  flex items-center justify-center">
              <CiLinkedin className="h-6 w-6 text-gray-700" />
            </div>
            <div className="rounded-full h-12 w-12 border border-gray-500  flex items-center justify-center">
              <FaXTwitter className="h-5 w-5 text-gray-700" />
            </div>
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

      <section></section>
    </main>
  );
}
