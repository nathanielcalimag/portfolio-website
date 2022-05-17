import SvgDeveloper from "../svg/svg-developer";
import SvgProfessor from "../svg/svg-professor";
import WorkCard from "./work-card";

const Work = () => {
  return (
    <section>
      <div className="container px-4 py-12 mx-auto lg:py-20">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 lg:text-4xl sm:text-center lg:text-left">
          Work Experience
        </h2>
        <div className="flex flex-col items-center gap-12 lg:items-stretch lg:flex-row">
        <WorkCard
            backgroundClasses="from-red-100 to-orange-200"
            svg={<SvgDeveloper classes="w-9/12 h-auto mx-auto mb-16" />}
          >
            <h3 className="mb-3 text-2xl font-bold text-center text-gray-700">
              Web Developer Intern
            </h3>
            <ul className="text-lg text-center">
              <li className="mb-1 font-semibold">Feb 2022 - May 2022</li>
              <li>Works.so</li>
              <li>MongoDB, ExpressJS, Angular</li>
            </ul>
          </WorkCard>

          <WorkCard
            backgroundClasses="from-indigo-100 to-purple-200"
            svg={<SvgProfessor classes="w-9/12 h-auto mx-auto mb-16" />}
          >
            <h3 className="mb-3 text-2xl font-bold text-center text-gray-700">
              Teaching Intern
            </h3>
            <ul className="text-lg text-center">
              <li className="mb-1 font-semibold">Jan 2020 - Mar 2020</li>
              <li>Ping Yi Secondary School</li>
              <li>Mathematics | Physics</li>
            </ul>
          </WorkCard>
        </div>
      </div>
    </section>
  );
};

export default Work;
