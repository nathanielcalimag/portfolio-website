import AboutListItem from "./about-list-item";
import SvgLogoCss from "../svg/svg-logo-css";
import SvgLogoHtml from "../svg/svg-logo-html";
import SvgLogoJs from "../svg/svg-logo-js";
import SvgLogoReact from "../svg/svg-logo-react";
import SvgLogoNext from "../svg/svg-logo-next";
import SvgLogoVue from "../svg/svg-logo-vue";
import { useInView } from "react-intersection-observer";

const AboutList = () => {
  // Slide in technologies when scrolled into view
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const technologies = [
    {
      name: "HTML 5",
      logo: <SvgLogoHtml />,
      code: "<h1>Frontend developer</h1>",
      nameClasses: "bg-orange-100",
      logoClasses: "bg-orange-50",
      codeClasses: "text-orange-500/80",
    },
    {
      name: "JavaScript",
      logo: <SvgLogoJs />,
      code: 'let versions = "ES6+";',
      nameClasses: "bg-yellow-100",
      logoClasses: "bg-yellow-50",
      codeClasses: "text-yellow-500/80",
    },
    {
      name: "Vue",
      code: 'const api = ref("composition");',
      logo: <SvgLogoVue />,
      nameClasses: "bg-green-100",
      logoClasses: "bg-green-50",
      codeClasses: "text-green-500/80",
    },
    {
      name: "React",
      code: "const App = () => <p>App</p>;",
      logo: <SvgLogoReact />,
      nameClasses: "bg-sky-100",
      logoClasses: "bg-sky-50",
      codeClasses: "text-sky-500/80",
    },
    {
      name: "CSS 3",
      code: "--color-primary: #3B82F6;",
      logo: <SvgLogoCss />,
      nameClasses: "bg-blue-100",
      logoClasses: "bg-blue-50",
      codeClasses: "text-blue-500/80",
    },
    {
      name: "Next.js",
      code: "getServerSideProps(context)",
      logo: <SvgLogoNext />,
      nameClasses: "bg-gray-100",
      logoClasses: "bg-gray-50",
      codeClasses: "text-gray-500/80",
    },
  ];

  return (
    <ul className="text-lg font-medium space-y-5" ref={ref}>
      {technologies.map((technology, index) => (
        <AboutListItem
          name={technology.name}
          code={technology.code}
          nameClasses={technology.nameClasses}
          logoClasses={technology.logoClasses}
          codeClasses={technology.codeClasses}
          key={technology.name}
          delay={(index - 1) * 0.1}
          reveal={inView}
        >
          {technology.logo}
        </AboutListItem>
      ))}
    </ul>
  );
};

export default AboutList;
