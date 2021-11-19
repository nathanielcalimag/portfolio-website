import HeroBackground from "./hero-background";
import HeroButton from "./hero-button";
import SvgStaticWebsite from "../svg/svg-static-website";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className="relative overflow-x-hidden" id="hero">
      <div
        className={`container px-4 pb-16 mx-auto text-center pt-28 ${styles.heroContainer}`}
      >
        <p className="text-2xl font-semibold text-gray-800">Hello, I{"'"}m</p>
        <h1 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
          Nathaniel&nbsp;Calimag
        </h1>

        <h2 className="mb-8 text-lg font-semibold leading-6">
          I'm a web developer and a prospective Computer Science student from
          NUS.
        </h2>

        <div className="flex gap-4 mb-12">
          {/* Todo: Add functionality */}
          <HeroButton classes="bg-gray-800 text-gray-50" text="My Projects" />
          <HeroButton
            classes="bg-gray-50 border border-gray-500"
            text="Contact Me"
          />
        </div>
        <SvgStaticWebsite classes="w-full h-auto" />
      </div>
      <HeroBackground />
    </section>
  );
};

export default Hero;
