import Link from "next/link";

function About() {
  return (
    <div className="lg:ml-32 md:ml-24 mx-10 text-gray-800">
      <h2 className="uppercase text-gray-600 text-xl font-semibold">
        About me
      </h2>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-xl font-medium font-serif">
        I&apos;m an aspiring front-end developer passionate about transforming
        ideas into reality through impactful web solutions. As a Computer
        Science student at the prestigious Lagos State University, I&apos;ve
        honed my skills in technologies like HTML, CSS, JavaScript, React, and
        Next.js, and I&apos;m eager to apply them in meaningful ways to create
        value.
      </p>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-xl font-medium font-serif">
        I&apos;m actively seeking opportunities where I can contribute to
        innovative projects and help solve real-world problems. I thrive on
        tackling challenges, meeting tight deadlines, and, most importantly,
        building products that users genuinely enjoy.
      </p>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-xl font-medium font-serif">
        When I&apos;m not coding, I enjoy staying active by playing sports,
        diving into thought-provoking documentaries on YouTube, and exploring my
        favorite music on Spotify, particularly rap.
      </p>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-xl font-medium font-serif">
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
