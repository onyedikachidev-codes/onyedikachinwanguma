function Skills() {
  return (
    <div className="flex flex-col items-start xl:gap-16 gap-10 xl:ml-32 md:ml-10 mx-8 mt-5">
      <div className="max-w-full">
        <h2 className=" text-gray-600 text-2xl xl:text-3xl xl:text-gray-900 font-semibold mb-3 md:mb-0 xl:mb-3">
          Relevant Courses & Skills
        </h2>

        <div className="flex flex-wrap gap-10 ">
          <div className="max-w-full  md:max-w-[45%]">
            <h4 className="text-gray-600 text-sm mt-2">Completed Jan 2023.</h4>
            <h3 className="font-medium text-lg">
              The Modern JavaScript Bootcamp Course (Udemy)
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="text-blue-700"> Skills learned:</span> JavaScript
              fundamentals, ES6+ syntax, Node.js, Express.js, asynchronous
              programming.
            </p>
          </div>

          <div className="max-w-full md:max-w-[45%]">
            <h4 className="text-gray-600 text-sm mt-2">Completed Jun 2024.</h4>
            <h3 className="font-medium text-lg">
              The Ultimate React Course 2024 (Udemy)
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="text-blue-700"> Skills learned:</span> React.js,
              Next.js, Redux, Tailwind CSS, Styled Components, React Query,
              React Router.
            </p>
          </div>

          <div className="max-w-full md:max-w-[45%]">
            <h4 className="text-gray-600 text-sm mt-2">
              Completed March 2025.
            </h4>
            <h3 className="font-medium text-lg">
              Mastering TypeScript - 2025 Edition (Udemy)
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="text-blue-700"> Skills learned:</span>{" "}
              Integrating React and TypeScript, Generics, Type Narrowing, Tuples
              & Enums and Interfaces.
            </p>
          </div>

          <div className="max-w-full md:max-w-[45%]">
            <h4 className="text-gray-600 text-sm mt-2">Completed Oct 2023.</h4>
            <h3 className="font-medium text-lg">
              JavaScript Algorithms and Data Structures (Udemy)
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="text-blue-700"> Skills learned:</span>{" "}
              Problem-solving techniques, algorithm design, Big-O notation,
              recursion, code optimization.
            </p>
          </div>

          <div className="max-w-full md:max-w-[45%]">
            <h4 className="text-gray-600 text-sm mt-2">Completed May 2023.</h4>
            <h3 className="font-medium text-lg">
              Advanced CSS and Sass: Flexbox, Grid and More! (Udemy)
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="text-blue-700"> Skills learned:</span> Responsive
              design techniques, Flexbox, Grid, Sass, CSS architecture and
              Animations.
            </p>
          </div>

          <div className="max-w-full md:max-w-[45%]">
            <h4 className="text-gray-600 text-sm mt-2">Completed Dec 2024.</h4>
            <h3 className="font-medium text-lg">
              SQL and PostgreSQL: The Complete Developer&apos;s Guide (Udemy)
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="text-blue-700"> Skills learned:</span> Connect
              PostgreSQL to front-end apps using an API, Optimize queries for
              superb read and write efficiency, Handle complex concurrency
              issues and race conditions.
            </p>
          </div>

          <div className="max-w-full">
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "HTML5",
                "CSS3",
                "Node.js",
                "Redux",
                "Tailwind",
                "SCSS",
                "PostgreSQL",
                "Supabase",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center justify-center text-lg font-semibold text-gray-800 hover:shadow-xl transition duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
