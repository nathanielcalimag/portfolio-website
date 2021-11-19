import SvgProgrammer from "../svg/svg-programmer";
import AboutList from "./about-list";

import styles from "./about.module.css";

const About = () => {
  return (
    <section>
      <div className="container px-4 py-12 mx-auto">
        <div className={styles.aboutContainer}>
          <h2 className="mb-4 text-3xl font-bold text-gray-800">About Me</h2>
          <SvgProgrammer classes="w-1/2 h-auto mx-auto mb-2" />
          <p className="text-justify">
            I began my frontend development journey on May 2021 and deployed my
            first website{" "}
            <a
              className="text-blue-800 underline"
              href="https://www.sgunistats.com"
              target="_blank"
              rel="noreferrer"
            >
              sgunistats.com
            </a>{" "}
            on September 2021. Now, I spend my free time learning web
            development and working on personal projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
