import Link from "next/link";

function About() {
  return (
    <div className="lg:ml-32 md:ml-24 mx-10 text-gray-800">
      <h2 className="uppercase text-gray-600 text-xl font-semibold">
        About me
      </h2>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-xl font-medium font-serif">
        I&apos;m an aspiring front-end developer with a knack for turning ideas
        into reality. As a Computer Science student of the prestigious Lagos
        State University, I&apos;ve cultivated my skills in web development and
        i&apos;m eager to apply them in more meaningful ways.
      </p>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-xl font-medium font-serif">
        I&apos;m currently on the lookout for exciting opportunities where I can
        contribute and help create value. I like a good challenge, I like the
        rush that comes with trying to beat a deadline and most importantly,
        building and launching products that people use is genuinely the best
        feeling.
      </p>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-xl font-medium font-serif">
        When I&apos;m not coding, you&apos;ll find me watching or playing
        sports, as well as watching captivating documentaries on youTube. I also
        spend a lot of time on spotify listening to rap music.
      </p>
      <p className="lg:max-w-[91%] md:max-w-[95%] max-w-full mt-4 text-xl font-medium font-serif">
        I thrive on creativity and innovation, and I&apos;m always on the
        lookout for opportunities to grow and connect with like-minded people.
        Contact me{" "}
        <span className="cursor-pointer text-gray-600 hover:text-gray-400">
          <Link href="/">here</Link>
        </span>
        .
      </p>{" "}
    </div>
  );
}

export default About;
