import SvgLogoVue from "../svg/svg-logo-vue";
import SvgLogoHtml from "../svg/svg-logo-html";
import ProjectTag from "./project-tag";
import SvgLogoCss from "../svg/svg-logo-css";
import SvgLogoJsSquare from "../svg/svg-logo-js-square";
import SvgLogoTailwind from "../svg/svg-logo-tailwind";
import SvgLogoSgunistats from "../svg/svg-logo-sgunistats";
/* eslint-disable @next/next/no-img-element */

const Projects = () => {
  const tags = [
    {
      technology: "Vue",
      logo: <SvgLogoVue />,
      classes: "bg-green-100",
    },
    {
      technology: "JavaScript",
      logo: <SvgLogoJsSquare />,
      classes: "bg-yellow-100",
    },
    {
      technology: "HTML",
      logo: <SvgLogoHtml />,
      classes: "bg-orange-100",
    },
    {
      technology: "CSS",
      logo: <SvgLogoCss />,
      classes: "bg-blue-50",
    },
    {
      technology: "Tailwind CSS",
      logo: <SvgLogoTailwind />,
      classes: "bg-sky-50",
    },
  ];
  return (
    <section className="relative overflow-x-hidden" id="projects">
      <div className="container px-4 py-12 mx-auto lg:py-20">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 lg:text-4xl">
          My Projects
        </h2>
        <div className="flex items-center gap-2 mb-4 ">
          <h3 className="text-xl font-bold text-gray-700 sm:text-2xl md:text-3xl">
            SGUniStats
          </h3>
          <SvgLogoSgunistats classes="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-700" />
        </div>

        <div className="relative mb-8">
          <picture>
            <source srcSet="/static/img/sgunistats_laptop.webp" />
            <source
              srcSet="/static/img/sgunistats_laptop.jpg"
              type="image/jpg"
            />
            <img
              className="w-11/12 h-auto rounded-lg shadow-xl"
              type="image/webp"
              src="/static/img/sgunistats_laptop.jpg"
              alt="sgunistats.com home page"
              loading="lazy"
            />
          </picture>
          <picture>
            <source srcSet="/static/img/sgunistats_tablet.webp" />
            <source
              srcSet="/static/img/sgunistats_tablet.jpg"
              type="image/jpg"
            />
            <img
              className="absolute right-0 w-4/12 rounded-lg shadow-xl -bottom-10"
              src="/static/img/sgunistats_tablet.jpg"
              alt="sgunistats.com courses page"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="mb-12">
          <h4 className="text-lg font-semibold text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            Overview
          </h4>
          <p className="leading-7 sm:leading-8 lg:leading-10">
            <a
              className="text-blue-800 md:hover:underline"
              href="https://www.sgunistats.com"
              target="_blank"
              rel="noreferrer"
            >
              SGUniStats.com
            </a>{" "}
            is a responsive Vue website with university data and tools for
            anyone looking to be a student in any Singapore local university.
            The website is self-sustaining, being funding by the ad revenue it
            generates through Google Adsense. SGUniStats is my first web
            development project which I deployed in Sep 2021.
          </p>
        </div>

        <div className="mb-12 space-y-2 lg:space-y-3">
          <h4 className="text-lg font-semibold text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
            Performance{" "}
            <span className="font-normal text-gray-600">(Nov 2021)</span>
          </h4>
          <p>
            <strong className="font-medium">5400</strong>+ ad impressions
          </p>
          <p>
            <strong className="font-medium">40%</strong> ad impression growth
          </p>
          <p>
            <strong className="font-medium">104%</strong> ad revenue increase
          </p>
          <p>
            <strong className="font-medium">First page result</strong> for
            search terms such as:
          </p>
          <ul className="italic leading-9 list-disc list-inside">
            <li>igp calculator</li>
            <li>rp calculator</li>
            <li>rank point calculator</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold text-gray-700 lg:mb-4 sm:text-xl md:text-2xl lg:text-3xl">
            Technologies Used
          </h4>
          <ul className="flex flex-wrap items-center mb-4 gap-x-3 gap-y-2 lg:gap-x-5 lg:gap-y-3">
            {tags.map((tag) => (
              <ProjectTag
                classes={tag.classes}
                technology={tag.technology}
                key={tag.technology}
              >
                {tag.logo}
              </ProjectTag>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute w-full h-auto sm:container -z-10 bottom-1/4 -left-1/4 opacity-10 sm:left-1/2 sm:-translate-x-1/2 sm:w-1/2 sm:bottom-0">
        <SvgLogoVue />
      </div>
    </section>
  );
};

export default Projects;
