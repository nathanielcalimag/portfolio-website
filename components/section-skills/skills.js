import SkillsList from "./skills-list";

const Skills = () => {
  return (
    <section>
      <div className="container px-4 py-12 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Technologies</h2>
        <SkillsList classes="mb-8" />
        <p className="font-semibold text-gray-700">
          Other Technologies I've tried
        </p>
        <ul className="list-disc list-inside">
          <li>Python</li>
          <li>Node.js</li>
          <li>Firebase</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
