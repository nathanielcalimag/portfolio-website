import Head from "next/head";
import Hero from "../components/section-hero/hero";
import About from "../components/section-about/about";
import Skills from "../components/section-skills/skills";
import Projects from "../components/section-projects/projects";
import Education from "../components/section-education/education";
import Work from "../components/section-work/work";
import Contact from "../components/section-contact/contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Disable scrolling until slightly after hero section animates (1s)
    document.body.style.overflow = "hidden";
    const timer = setTimeout(
      () => (document.body.style.overflow = "unset"),
      1000
    );

    // Scrolling to top of page on reload
    const pageReloadHandler = () => window.scrollTo(0, 0);
    window.addEventListener("beforeunload", pageReloadHandler);

    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
      window.removeEventListener("beforeunload", pageReloadHandler);
    };
  });

  return (
    <>
      <Head>
        <title>Nathaniel Calimag | Frontend Developer</title>
        <meta
          name="description"
          content="Web developer and NUS Computer Science undergraduate from Singapore."
        />
      </Head>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Work />
        <Contact />
      </main>
    </>
  );
}
