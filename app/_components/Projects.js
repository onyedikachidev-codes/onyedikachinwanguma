"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

import toolkit from "@/public/toolkit.jpg";
import helpr from "@/public/helpr.jpg";
import trivela from "@/public/Trivela.png";
import nfcs from "@/public/nfcs.png";
import SideProjects from "./SideProjects";

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

      <div className=" text-gray-800 flex flex-col items-start">
        <div className="flex xl:flex-row flex-col flex-wrap items-start gap-2 max-w-[84%] mx-auto mt-12">
          <div className="bg-gray-200 rounded-2xl shadow-lg p-6 space-y-4 max-w-[44%] mx-auto border hover:scale-105 transform duration-200">
            {/* Project Title */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Trivela</h3>
              <span className="text-sm text-gray-500 ">
                #React #TypeScript #NextAuth
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700">
              Trivela is an eCommerce platform built using FakeStoreAPI,
              designed to simulate a full-featured online shopping experience.
              It includes core functionalities such as product listing, cart
              management (add, remove, update items), search, pagination,
              sorting, and dynamic filtering.
            </p>

            {/* Tech Stack */}
            <div className="text-sm text-gray-600 ">
              <strong>Tech Stack:</strong> React · TypeScript · Next.js ·
              NextAuth.js · Redux · Tanstack Query · TailwindCSS
            </div>

            {/* Screenshot Placeholder */}
            <div className="rounded-xl overflow-hidden border dark:border-gray-700">
              <Image
                src={trivela}
                alt="Toolkit page"
                quality={100}
                className="w-full h-[12.2rem] object-cover object-center"
              />
            </div>

            {/* Action Links */}
            <div className="flex justify-between items-center">
              <div className="space-x-4">
                <Link
                  href="https://trivela-teal.vercel.app/"
                  target="_blank"
                  className="text-blue-500 font-medium hover:scale-105"
                >
                  🔗 Live Demo
                </Link>
              </div>
              <span className="text-sm text-gray-500 ">Solo Project</span>
            </div>
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-lg p-6 space-y-4 max-w-[44%] mx-auto border hover:scale-105 transform duration-200">
            {/* Project Title */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">N.F.C.S. Database</h3>
              <span className="text-sm text-gray-500 ">#React #Supabase</span>
            </div>

            {/* Description */}
            <p className="text-gray-700">
              It is a database management application designed to store and
              manage information about members of an organization. It features a
              dashboard with data visualizations, supports CRUD (create, read,
              update, delete), and includes functionalities such as sorting,
              pagination, search, and dark mode.
            </p>

            {/* Tech Stack */}
            <div className="text-sm text-gray-600 ">
              <strong>Tech Stack:</strong> React · Next.js · Tailwind CSS ·
              Supabase · Tanstack Query
            </div>

            {/* Screenshot Placeholder */}
            <div className="rounded-xl overflow-hidden border dark:border-gray-700">
              <Image
                src={nfcs}
                alt="Helpr page"
                quality={100}
                className="w-full h-[12.2rem] object-cover object-center"
              />
            </div>

            {/* Action Links */}
            <div className="flex justify-between items-center">
              <div className="space-x-4">
                <Link
                  href="https://nfcs-database.vercel.app/"
                  target="_blank"
                  className="text-blue-500 font-medium hover:scale-105"
                >
                  🔗 Live Demo
                </Link>
              </div>
              <span className="text-sm text-gray-500 ">Solo Project</span>
            </div>
          </div>

          <div className="bg-gray-200 mt-10 rounded-2xl shadow-lg p-6 space-y-4 max-w-[44%] mx-auto border hover:scale-105 transform duration-200">
            {/* Project Title */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">ToolKit</h3>
              <span className="text-sm text-gray-500 ">
                #React #Tailwindcss
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700">
              ToolKit is a utility website for digital and practical tools. Your
              one-stop destination for quick and reliable digital utilities!
            </p>

            {/* Tech Stack */}
            <div className="text-sm text-gray-600 ">
              <strong>Tech Stack:</strong> React · NodeJS · Tailwind CSS
            </div>

            {/* Screenshot Placeholder */}
            <div className="rounded-xl overflow-hidden border dark:border-gray-700">
              <Image
                src={toolkit}
                alt="Toolkit page"
                quality={100}
                className="w-full h-[12.2rem] object-cover object-center"
              />
            </div>

            {/* Action Links */}
            <div className="flex justify-between items-center">
              <div className="space-x-4">
                <Link
                  href="https://toolkit-amber-nine.vercel.app/"
                  target="_blank"
                  className="text-blue-500 font-medium hover:scale-105"
                >
                  🔗 Live Demo
                </Link>
              </div>
              <span className="text-sm text-gray-500 ">Collabo Project</span>
            </div>
          </div>

          <div className="bg-gray-200 mt-10 rounded-2xl shadow-lg p-6 space-y-4 max-w-[44%] mx-auto border hover:scale-105 transform duration-200">
            {/* Project Title */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Helpr</h3>
              <span className="text-sm text-gray-500 ">
                #React #Tailwindcss
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700">
              Helpr is a crowdfunding platform that allows individuals and
              organizations to raise money for personal, charitable causes.
            </p>

            {/* Tech Stack */}
            <div className="text-sm text-gray-600 ">
              <strong>Tech Stack:</strong> React · Next.js · Tailwind CSS
            </div>

            {/* Screenshot Placeholder */}
            <div className="rounded-xl overflow-hidden border dark:border-gray-700">
              <Image
                src={helpr}
                alt="Helpr page"
                quality={100}
                className="w-full h-[12.2rem] object-cover object-center"
              />
            </div>

            {/* Action Links */}
            <div className="flex justify-between items-center">
              <div className="space-x-4">
                <Link
                  href="https://helpr-zeta.vercel.app/"
                  target="_blank"
                  className="text-blue-500 font-medium hover:scale-105"
                >
                  🔗 Live Demo
                </Link>
              </div>
              <span className="text-sm text-gray-500 ">Solo Project</span>
            </div>
          </div>
        </div>

        <SideProjects />
      </div>
    </div>
  );
}

export default Projects;
