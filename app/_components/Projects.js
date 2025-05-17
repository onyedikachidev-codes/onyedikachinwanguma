"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

import toolkit from "@/public/toolkit.jpg";
import helpr from "@/public/helpr.jpg";
import trivela from "@/public/Trivela.png";
import nfcs from "@/public/nfcs.png";
import SideProjects from "./SideProjects";

const projects = [
  {
    title: "Trivela",
    tags: "#React #TypeScript #NextAuth",
    description:
      "Trivela is an eCommerce platform built using FakeStoreAPI, designed to simulate a full-featured online shopping experience. It includes core functionalities such as product listing, cart management (add, remove, update items), search, pagination, sorting, and dynamic filtering.",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "NextAuth.js",
      "Redux",
      "Tanstack Query",
      "TailwindCSS",
    ],
    image: trivela,
    alt: "Trivela page",
    liveDemo: "https://trivela-teal.vercel.app/",
    type: "Solo Project",
  },
  {
    title: "N.F.C.S. Database",
    tags: "#React #Supabase",
    description:
      "It is a database management application designed to store and manage information about members of an organization. It features a dashboard with data visualizations, supports CRUD (create, read, update, delete), and includes functionalities such as sorting, pagination, search, and dark mode.",
    techStack: [
      "React",
      "Next.js",
      "Supabase",
      "Tanstack Query",
      "TailwindCSS",
    ],
    image: nfcs,
    alt: "NFCS page",
    liveDemo: "https://nfcs-database.vercel.app/",
    type: "Solo Project",
  },
  {
    title: "ToolKit",
    tags: "#React #Tailwindcss",
    description:
      "ToolKit is a utility website offering a collection of digital and practical tools designed to simplify everyday tasks. It provides a fast, reliable platform with features like QR code generation, file conversion, and more, all wrapped in a clean, responsive UI built with React, Node.js, and TailwindCSS.",
    techStack: ["React", "Node.js", "TailwindCSS"],
    image: toolkit,
    alt: "Toolkit page",
    liveDemo: "https://toolkit-amber-nine.vercel.app/",
    type: "Collabo Project",
  },
  {
    title: "Helpr",
    tags: "#React #Tailwindcss",
    description:
      "Helpr is a crowdfunding platform built to help individuals and organizations raise funds for personal and charitable causes. It offers an easy-to-use interface, secure payment options, and campaign management features such as progress tracking, social sharing, and donor communication",
    techStack: ["React", "Next.js", "TailwindCSS"],
    image: helpr,
    alt: "Helpr page",
    liveDemo: "https://helpr-zeta.vercel.app/",
    type: "Solo Project",
  },
];

function Projects() {
  return (
    <div className="md:mt-20 mt-5">
      <div id="projects" className="mb-20">
        &nbsp;
      </div>

      <h2 className="text-center text-2xl md:text-3xl font-semibold">
        My Projects
      </h2>
      <p className="text-center mt-3 text-lg text-gray-700 mx-6">
        Here are some of my recent works that showcase my skills and passion for
        development.
      </p>

      <div className="text-gray-800 flex flex-col items-start">
        <div className="grid gap-8 grid-cols-1 xmd:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto mt-12 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 mt-10 rounded-2xl shadow-lg space-y-4 max-w-[98%] mx-auto border hover:scale-105 transform duration-200"
            >
              <div className="rounded-xl overflow-hidden border">
                <Image
                  src={project.image}
                  alt={project.alt}
                  quality={100}
                  className="w-full max-h-64 md:max-h-80 object-contain object-top shadow-sm"
                />
              </div>

              <div className="pt-3 px-4">
                <h3 className="text-xl font-semibold flex justify-between items-center">
                  <span>{project.title}</span>
                  <Link
                    href={project.liveDemo}
                    target="_blank"
                    className="text-blue-500 font-medium text-base ml-2"
                  >
                    Live Demo
                  </Link>
                </h3>

                <p className="text-gray-700 text-sm mt-2.5 mb-2">
                  {project.description}
                </p>

                <div className="mt-2.5 flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((item, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-800 font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <SideProjects />
      </div>
    </div>
  );
}

export default Projects;
