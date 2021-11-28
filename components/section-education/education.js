import EducationCard from "./education-card";

const Education = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container px-4 py-12 mx-auto lg:py-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-800 lg:text-4xl">
          Education
        </h2>

        <div className="2xl:flex 2xl:gap-6">
          <EducationCard
            cardClasses="bg-gradient-to-br from-lime-100 to-green-200"
            textClasses="text-green-800"
            institute="Temasek Junior College"
            timeframe="2018-2019"
          >
            <p className="mb-2 text-xs font-medium sm:text-base lg:text-lg">
              Physics • Chemistry • Math • Economics
            </p>
            <p>
              <strong className="font-medium text-gray-700">88.75</strong> Rank
              Points for A-Levels
            </p>
            <p>
              <strong className="font-medium text-gray-700">5</strong>{" "}
              distinctions
            </p>
          </EducationCard>

          <EducationCard
            cardClasses="bg-gradient-to-br from-sky-100 to-blue-200"
            textClasses="text-blue-800"
            institute="National University of&nbsp;Singapore"
            timeframe="2022-2026"
          >
            <p className="mb-2 text-xs font-medium text-gray-700 sm:text-base lg:text-lg">
              Computer Science
            </p>
            <p>Bachelor of Computing</p>
            <p>
              Matriculating in{" "}
              <strong className="font-medium text-gray-700">AY2022/2023</strong>
            </p>
          </EducationCard>
        </div>
      </div>
    </section>
  );
};

export default Education;
