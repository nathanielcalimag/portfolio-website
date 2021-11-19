import SvgProfessor from "../svg/svg-professor";

const Work = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container px-4 py-12 mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          Work Experience
        </h2>
        <div className="flex justify-between">
          <div className="flex-shrink-0">
            <h3 className="text-lg font-bold text-gray-700">Teaching Intern</h3>
            <ul>
              <li>Jan 2020 - Mar 2020</li>
              <li>Ping Yi Secondary School</li>
              <li>Mathematics | Physics</li>
            </ul>
          </div>

          <SvgProfessor classes="w-auto h-32" />
        </div>
      </div>
    </section>
  );
};

export default Work;
