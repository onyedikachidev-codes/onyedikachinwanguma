function Skills() {
  return (
    <div className="flex  flex-col items-start xl:gap-16 gap-10 xl:ml-32 md:ml-10 mx-8 mt-5">
      <div className="max-w-full">
        <h2 className=" text-gray-600 text-2xl xl:text-3xl xl:text-gray-900 font-semibold mb-3 md:mb-0 xl:mb-3">
          Relevant Online Courses & Skills
        </h2>

        <div className="flex flex-wrap gap-10 ">
          <div className="max-w-[45%]">
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

          <div className="max-w-[45%]">
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

          <div className="max-w-[45%]">
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

          <div className="max-w-[45%]">
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

          <div className="max-w-[45%]">
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

          <div className="xl:max-w-[45%] md:max-w-[93%] max-w-[98%]">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 max-w-full">
              <div className="py-3 px-7 bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-110">
                JavaScript
              </div>
              <div className="py-3 px-9 bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-110">
                React
              </div>
              <div className="py-3 px-9 bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-110">
                Next.js
              </div>
              <div className="py-3 px-[2.4rem] bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-110">
                NodeJS
              </div>
              <div className="py-3 px-[2.16rem] bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-110">
                Redux
              </div>
              <div className="py-3 px-[2.65rem] bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-110">
                HTML5
              </div>
              <div className="py-3 px-[3.07rem] bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-110">
                CSS3
              </div>
              <div className="py-3 px-10 bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-110">
                SCSS
              </div>
              <div className="py-3 px-0 bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-[1.06]">
                Tailwind CSS
              </div>
              <div className="py-3 bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-[1.07]">
                PostgreSQL
              </div>
              <div className="py-3 bg-blue-500 flex items-center justify-center text-center text-medium text-gray-100 rounded-md shadow-md transform transition-transform duration-300 hover:scale-[1.07]">
                Supabase
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
