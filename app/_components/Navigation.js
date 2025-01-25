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

      <div className="md:hidden ">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu
            className={`${
              isOpen ? "hidden" : "block"
            } h-6 w-6 text-blue-800 hover:text-blue-600`}
          />
          <FaTimes
            className={`${
              isOpen ? "block" : "hidden"
            } h-6 w-6 text-blue-800 hover:text-blue-600`}
          />
        </button>
      </div>

      <div
        className={`${
          isOpen
            ? "absolute top-[4.4rem] sm:top-[20dvh] z-100 min-h-screen w-full left-0 bg-gray-100 overflow-hidden"
            : "hidden"
        } md:hidden `}
      >
        {/* <div className="uppercase w-full ml-8 mt-6">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:bg-gray-200 block px-3 py-2 rounded-md text-lg font-medium w-full"
          >
            About
          </Link>

          <Link
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:bg-gray-200 block px-3 py-2 rounded-md text-lg font-medium w-full mt-2"
          >
            Skills
          </Link>

          <Link
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:bg-gray-200 block px-3 py-2 rounded-md text-lg font-medium w-full mt-2"
          >
            Projects
          </Link>

          <Link
            href="mailto:nwangumabimma@gmail.com"
            onClick={() => setIsOpen(false)}
            className="hover:bg-gray-200 block px-3 py-2 rounded-md text-lg font-medium w-full mt-2"
          >
            Contact
          </Link>
        </div> */}

        <div className="uppercase w-full mt-6">
          <div
            onClick={() => {
              router.push("#about");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5 rounded-md text-lg font-medium w-[90%] border-b border-gray-700"
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
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5 rounded-md text-lg font-medium w-[90%] border-b border-gray-700"
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
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5 rounded-md text-lg font-medium w-[90%] border-b border-gray-700"
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
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5 rounded-md text-lg font-medium w-[90%] "
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
