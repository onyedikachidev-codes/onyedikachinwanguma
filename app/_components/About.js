import Link from "next/link";

function About() {
  return (
    <div className="lg:ml-32 md:ml-24 mx-10 text-gray-800">
      <h2 className="uppercase text-xl md:text-2xl font-semibold">About me</h2>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-base font-medium ">
        I&apos;m a Junior Frontend Engineer with a strong foundation in web
        development and a focus on delivering high-quality, user-centric web
        applications. With a background in Computer Science from Lagos State
        University, I’ve honed my expertise in technologies such as HTML, CSS,
        JavaScript, TypeScript, React, and Next.js. I&apos;m driven to leverage
        these skills to build efficient, scalable, and visually compelling web
        solutions that create real value for users and businesses alike.
      </p>

      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-base font-medium text-gray-600">
        When I&apos;m not coding, I enjoy staying active by playing sports,
        diving into thought-provoking documentaries on YouTube, and exploring my
        favorite music on Spotify, particularly rap.
      </p>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-base font-medium text-gray-600">
        Driven by creativity and innovation, I&apos;m constantly on the lookout
        for opportunities to grow, collaborate, and connect with like-minded
        individuals. Let&apos;s work together to make an impact, feel free to
        reach me at
        <span className="cursor-pointer text-blue-600 hover:text-blue-800">
          <Link href="mailto:nwangumabimma@gmail.com">
            {" "}
            nwangumabimma@gmail.com
          </Link>
        </span>
      </p>
    </div>
  );
}

export default About;
