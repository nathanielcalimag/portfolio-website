import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationHandler } from "../../includes/helpers";
import SvgLogoPersonal from "../svg/svg-logo-personal";

import styles from "./nav.module.css";

const Nav = () => {
  const [scrollClasses, setScrollClasses] = useState("bg-opacity-0");

  useEffect(() => {
    const heroBackground = document.getElementById("heroBackground");

    // Guard clause for error page
    if (!heroBackground) return;

    // Set scrolled state depending on herobackground
    const observer = new IntersectionObserver(
      (entries) => {
        // Scrolled to content
        if (!entries[0].isIntersecting)
          setScrollClasses("bg-opacity-90 shadow backdrop-blur-sm bg-gray-50");
        // Scrolled to hero
        else if (entries[0].intersectionRatio < 1)
          setScrollClasses("bg-opacity-90 shadow backdrop-blur-sm bg-blue-100");
        // Top of page
        else if (entries[0].intersectionRatio === 1)
          setScrollClasses("bg-opacity-0");
      },
      { threshold: [0, 1] }
    );

    observer.observe(heroBackground);

    // return () => IntersectionObserver.unobserve(heroBackground);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full px-4 py-2 transition duration-500 sm:px-6 sm:py-3 lg:px-8 lg:py-4
        ${scrollClasses}
        }`}
    >
      <nav>
        <ul
          className={`flex items-center gap-4 text-lg font-semibold sm:text-xl lg:text-2xl ${styles.navLinks}`}
        >
          <li className="mr-auto">
            <a
              href="#heroBackground"
              className="md:transition md:duration-300 md:hover:text-blue-800"
              onClick={navigationHandler}
            >
              <SvgLogoPersonal classes="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="md:transition md:duration-300 md:after:duration-300 md:hover:text-blue-700 after:bottom-0 md:after:block md:after:h-0.5 md:after:left-1/2 md:after:absolute md:after:bg-blue-700 md:after:transition-all md:after:w-0 md:hover:after:w-full md:hover:after:left-0"
              onClick={navigationHandler}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="/nathaniel_calimag_resume.pdf"
              className="md:transition md:duration-300 md:after:duration-300 md:hover:text-blue-700 after:bottom-0 md:after:block md:after:h-0.5 md:after:left-1/2 md:after:absolute md:after:bg-blue-700 md:after:transition-all md:after:w-0 md:hover:after:w-full md:hover:after:left-0"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
