import SvgLogoPython from "../svg/svg-logo-python";
import SvgLogoFirebase from "../svg/svg-logo-firebase";
import SkillsList from "./skills-list";
import SvgLogoNode from "../svg/svg-logo-node";
import SvgLogoMongodb from "../svg/svg-logo-mongodb";

const Skills = () => {
  return (
    <section>
      <div className="container px-4 py-12 mx-auto lg:py-20">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 lg:text-4xl lg:mb-6">
          Technologies
        </h2>
        <SkillsList classes="mb-8 lg:mb-16" />
        <p className="mb-2 font-semibold text-gray-700 lg:mb-3">
          Other Technologies I&#39;ve tried
        </p>

        <ul className="lg:space-y-2">
          <li>
            <div className="inline-flex items-center gap-2">
              <SvgLogoPython classes="w-7 h-7" />
              <p>Python</p>
            </div>
          </li>
          <li>
            <div className="inline-flex items-center gap-2">
              <SvgLogoFirebase classes="w-7 h-7" />
              <p>Firebase</p>
            </div>
          </li>
          <li>
            <div className="inline-flex items-center gap-2">
              <SvgLogoNode classes="w-7 h-7" />
              <p>Node.js</p>
            </div>
          </li>
          <li>
            <div className="inline-flex items-center gap-2">
              <SvgLogoMongodb classes="w-7 h-7" />
              <p>MongoDB</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
