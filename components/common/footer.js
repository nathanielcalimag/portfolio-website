import { navigationHandler } from "../../includes/helpers";
import SvgLogoPersonal from "../svg/svg-logo-personal";
import SocialLinks from "./social-links";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/nathanielcalimag",
      content: "Github",
    },
    {
      href: "https://twitter.com/nathaniel_ca",
      content: "Twitter",
    },
    {
      href: "https://www.linkedin.com/in/nathanielcalimag/",
      content: "LinkedIn",
    },
  ];
  return (
    <footer className="bg-gray-100">
      <div className="container px-4 py-8 mx-auto font-mono text-center lg:py-16 lg:leading-10">
        <a
          className="mx-auto inline-flex items-center gap-1.5 sm:gap-2.5 lg:gap-4 md:transition md:hover:text-gray-900"
          href="#heroBackground"
          onClick={navigationHandler}
        >
          <SvgLogoPersonal classes="w-4 h-4 lg:w-5 lg:h-5" />
          <p className="font-bold">Nathaniel Calimag</p>
        </a>
        <SocialLinks
          socialLinks={socialLinks}
          listClasses="text-sm sm:text-lg lg:text-xl mb-6"
          linkClasses="inline"
          anchorClasses="md:transition md:hover:text-gray-900"
          separator=" • "
        />
        <p className="text-xs sm:text-base lg:text-lg">
          Made with Next.js, React and Tailwind CSS.
        </p>
        <p className="text-xs sm:text-base lg:text-lg">
          © 2021 Nathaniel Calimag. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
