import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex justify-between mx-10 pt-6 items-center max-w-full relative uppercase pb-4  border-b border-gray-300">
      <div>
        <Link href="/" className="font-semibold text-xl">
          Onyedikachi Nwanguma
        </Link>
      </div>

      <ul className="flex items-center gap-8 text-lg">
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
    </nav>
  );
}

export default Navigation;
