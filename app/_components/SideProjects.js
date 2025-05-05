import Link from "next/link";
import React from "react";

const sideProjects = [
  {
    title: "Hangman Game",
    description:
      "A classic word-guessing game built with interactive UI and game logic.",
    link: "https://hangman-nine-beta.vercel.app/",
  },
  {
    title: "Classy Weather",
    description:
      "A responsive app that displays real-time weather info using live API data.",
    link: "https://weather-kachi.vercel.app/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A simple two-player game with win detection and a clean, responsive interface.",
    link: "https://onyedikachidev-codes.github.io/TicTacToe/",
  },
  {
    title: "Natours",
    description: "Built while learning SCSS.",
    link: "https://onyedikachidev-codes.github.io/Natours/",
  },
  {
    title: "Trillo",
    description: "Hotel Reservation website, built with SCSS and HTML",
    link: "https://onyedikachidev-codes.github.io/Trillo/",
  },
  {
    title: "To-Do App",
    description:
      "A simple to-do list app built with vanilla JavaScript and clean UI.",
    link: "https://onyedikachidev-codes.github.io/Todo-list/",
  },
];

export default function SideProjects() {
  return (
    <div className="p-6 rounded-2xl shadow-sm mt-10 mx-10">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Other Projects
      </h2>
      <p className="text-gray-600 mb-6">
        Explore a few of the other projects I&apos;ve built.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sideProjects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-5 rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
