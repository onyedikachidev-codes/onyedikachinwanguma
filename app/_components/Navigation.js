"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import Hambuger from "./Hambuger";

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
        <Hambuger
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </nav>
  );
}

export default Navigation;
