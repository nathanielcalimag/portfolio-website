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
    <section className="relative overflow-x-hidden">
      <div className="container px-4 py-12 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          My Projects
        </h2>
        <div className="flex items-center gap-2 mb-4 ">
          <h3 className="text-xl font-bold text-gray-700">SGUniStats</h3>
          <SvgLogoSgunistats classes="w-6 h-6 text-gray-700" />
        </div>

        <div className="relative mb-8">
          <img
            className="w-11/12 h-auto rounded-lg shadow-xl"
            src="/static/img/sgunistats_laptop.png"
            alt="sgunistats.com home page"
          />
          <img
            className="absolute right-0 w-4/12 rounded-lg shadow-xl -bottom-10"
            src="/static/img/sgunistats_tablet.png"
            alt="sgunistats.com home page"
          />
        </div>

        <div className="mb-12">
          <h4 className="text-lg font-semibold text-gray-700">Overview</h4>
          <p>
            <a
              className="text-blue-800"
              href="https://www.sgunistats.com"
              target="_blank"
              rel="noreferrer"
            >
              SGUniStats.com
            </a>{" "}
            is a responsive Vue website for anyone looking to be a student in a
            local university. It is a progressive web application with Adsense.
          </p>
        </div>

        <div className="mb-12 leading-8">
          <h4 className="text-lg font-semibold text-gray-700">Performance</h4>
          <p>
            <strong className="text-lg font-medium">2700+</strong> page views
          </p>
          <p>
            <strong className="text-lg font-medium">80</strong> average daily
            page views
          </p>
          <p className="leading-5">
            <strong className="text-lg font-medium">Top 10</strong> average
            position for the following search terms:
          </p>
          <ul className="list-disc list-inside">
            <li>igp calculator</li>
            <li>rp calculator a level</li>
            <li>a level rp calculator</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-lg font-semibold text-gray-700">
            Technologies Used
          </h4>
          <ul className="flex flex-wrap items-center mb-4 gap-x-3 gap-y-2">
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

      <div className="absolute w-full h-auto -z-10 bottom-52 -left-16 opacity-10">
        <SvgLogoVue classes="w-8 h-auto" />
      </div>
    </section>
  );
};

export default Projects;
