"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add or remove overflow: hidden on the body
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    window.location.href = "mailto:nwangumabimma@gmail.com";
  };

  return (
    <nav className="relative flex justify-between md:px-10 px-5 pt-6 items-center max-w-full uppercase pb-4  border-b border-gray-300">
      <div>
        <Link
          href="/"
          className="flex items-center gap-1 font-semibold text-xl"
        >
          Onyedikachi <span className="hidden lg:block">Nwanguma</span>
        </Link>
      </div>

      <ul className="md:flex hidden items-center gap-8 text-lg">
        <li>
          <Link href="#about" className="relative group">
            <span className="text-gray-800 hover:text-gray-500 transition duration-300">
              About
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link href="#skills" className="relative group">
            <span className="text-gray-800 hover:text-gray-500 transition duration-300">
              Skills
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>

        <li>
          <Link href="#projects" className="relative group">
            <span className="text-gray-800 hover:text-gray-500 transition duration-300">
              Projects
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            href="mailto:nwangumabimma@gmail.com"
            className="relative group"
          >
            <span className="text-gray-800 hover:text-gray-500 transition duration-300">
              Contact
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="relative h-8 w-8">
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
            <GiHamburgerMenu
              className={`h-6 w-6 text-blue-800 hover:text-blue-600 transform transition-all duration-300 ${
                isOpen
                  ? "scale-0 rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
            />
            <FaTimes
              className={`h-6 w-6 text-blue-800 hover:text-blue-600 absolute transform transition-all duration-300 ${
                isOpen
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-0 -rotate-90 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`absolute top-[10dvh] sm:top-[20dvh] md:hidden w-full min-h-screen left-0  overflow-hidden p-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 fixed inset-0 z-100 bg-gray-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }  `}
      >
        <div className="uppercase w-full mt-6">
          <div
            onClick={() => {
              router.push("#about");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5  text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              router.push("#skills");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5  text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              router.push("#projects");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5  text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              handleButtonClick();
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5  text-lg font-medium w-[90%] "
          >
            <Link
              href="mailto:nwangumabimma@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
