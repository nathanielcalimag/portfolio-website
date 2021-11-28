import HeroBackground from "./hero-background";
import HeroButton from "./hero-button";
import SvgStaticWebsite from "../svg/svg-static-website";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div
        className={`px-4 pb-16 lg:pb-28 mx-auto text-center lg:text-left pt-28 lg:pt-36 grid lg:grid-cols-2 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[960px] xl:max-w-[1080px] 2xl:max-w-[1240px] ${styles.heroContainer}`}
      >
        <div>
          <p className="text-2xl font-semibold text-gray-800 xs:text-3xl sm:text-4xl lg:mb-3">
            Hello, I&#39;m
          </p>
          <h1 className="pb-4 text-3xl font-bold text-transparent xs:text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r lg:pb-8 from-sky-500 to-indigo-600">
            Nathaniel&nbsp;Calimag
          </h1>

          <h2 className="mb-8 text-lg font-medium leading-7 lg:mb-10 xs:text-xl sm:text-2xl">
            I&#39;m a{" "}
            <strong className="font-semibold text-gray-700">
              web developer
            </strong>{" "}
            and a prospective Computer Science student from NUS.
          </h2>

          <div className="flex gap-4 mx-auto mb-12 text-center xs:w-11/12 sm:w-10/12 md:w-9/12 lg:mx-0">
            <HeroButton
              classes="bg-gray-700 text-gray-50 md:hover:bg-gray-900 md:transition md:duration-300"
              text="My Projects"
              href="#projects"
            />
            <HeroButton
              classes="bg-gray-50 border border-gray-500 md:hover:bg-gray-200 md:transition md:duration-300"
              text="Contact Me"
              href="#contact"
            />
          </div>
        </div>
        <SvgStaticWebsite classes="w-full h-auto" />
      </div>
      <HeroBackground />
    </section>
  );
};

export default Hero;
