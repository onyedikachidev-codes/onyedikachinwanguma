"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

import toolkit from "@/public/toolkit.jpg";
import helpr from "@/public/helpr.jpg";

function Projects() {
  return (
    <div className="md:mt-20 mt-5">
      <div id="projects" className="mb-20">
        &nbsp;
      </div>
      <h2
        id="projects"
        className="text-center text-3xl text-gray-900 font-semibold uppercase "
      >
        My Projects
      </h2>
      <p className="text-center mt-3 text-lg text-gray-700 mx-6">
        Here are some of my recent works that showcase my skills and passion for
        development.
      </p>
      <div className=" text-gray-800 flex items-start">
        <div className="flex xl:flex-row flex-col items-start gap-8 md:ml-16 mx-8 mt-12">
          <div className="group relative flex md:flex-row flex-col items-start gap-4 xl:max-w-[47%] max-w-full bg-gray-100 px-5 py-6 rounded-md hover:bg-gray-200 cursor-pointer">
            <Image
              src={toolkit}
              alt="Toolkit page"
              width={150}
              height={150}
              className="group-hover:scale-105 h-[8rem] w-[40rem] xl:h-[5rem] xl:w-[10rem]"
            />
            <div>
              <Link
                href="https://toolkit-amber-nine.vercel.app/"
                className="flex gap-1 items-center text-xl font-semibold group-hover:text-blue-500 group-hover:scale-x-[1.02]"
              >
                ToolKit
                <span className="text-sm font-normal">
                  <FaExternalLinkAlt />
                </span>
              </Link>
              <p className="mt-3 text-medium text-gray-800">
                ToolKit is a utility website for digital and practical tools.
                Your one-stop destination for quick and reliable digital
                utilities!
              </p>
              <p className="mt-3 text-gray-600">
                Developed a scalable frontend with Next.js and a backend using
                NodeJS and express.js. Features include easy generation of QR
                codes, conversion of PDFs to Word, transforming Word documents
                into PDFs and access a variety of other useful tools—all in one
                place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Next.js
                </span>

                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  NodeJS
                </span>

                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Express.js
                </span>

                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col md:flex-row items-start gap-4 xl:max-w-[47%] max-w-full bg-gray-100 px-5 py-6 rounded-md hover:bg-gray-200 cursor-pointer">
            <Image
              src={helpr}
              alt="Toolkit page"
              width={150}
              height={150}
              className="group-hover:scale-105 h-[8rem] w-[40rem] xl:h-[5rem] xl:w-[10rem]"
            />
            <div>
              <Link
                href="https://helpr-zeta.vercel.app/"
                className="flex gap-1 items-center text-xl font-semibold group-hover:text-blue-500 group-hover:scale-x-[1.02] "
              >
                Helpr
                <span className="text-sm font-normal">
                  <FaExternalLinkAlt />
                </span>
              </Link>
              <p className="mt-3 text-medium text-gray-800">
                Helpr is a crowdfunding platform that allows individuals and
                organizations to raise money for personal, charitable causes.
              </p>
              <p className="mt-3 text-gray-600">
                Built a scalable frontend with Next.js and a backend using
                NodeJS and express.js and PostgreSQL for database management.
                Features include authentication, creating fundraisers and
                donating to existing fundraisers to support individuals or
                communities in need.
              </p>

              <div className="mt-8 flex flex-wrap md:gap-4 gap-2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Next.js
                </span>

                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  NodeJS
                </span>

                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Express.js
                </span>

                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  Tailwind CSS
                </span>

                <span className="bg-blue-500 text-white px-4 py-2 rounded-full">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
