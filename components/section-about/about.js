import SvgProgrammer from "../svg/svg-programmer";

import styles from "./about.module.css";

const About = () => {
  return (
    <section>
      <div className="container px-4 py-12 mx-auto lg:py-20">
        <div className={styles.aboutContainer}>
          <h2 className="mb-4 text-3xl font-bold text-gray-800 lg:text-4xl">
            About Me
          </h2>
          <SvgProgrammer classes="w-1/2 lg:w-5/12 h-auto mx-auto mb-2" />
          <p className="leading-7 text-justify sm:leading-8 lg:leading-10">
            I took interest in{" "}
            <strong className="font-semibold">frontend&nbsp;development</strong>{" "}
            and <strong className="font-semibold">web&nbsp;design</strong> in
            2021 and eventually learned enough to deploy my first website{" "}
            <a
              className="text-blue-800 md:hover:underline"
              href="https://www.sgunistats.com"
              target="_blank"
              rel="noreferrer"
            >
              sgunistats.com
            </a>{" "}
            that very year. Now, I spend my spare time improving my web
            development skills, working on personal projects and learning about
            Computer Science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
