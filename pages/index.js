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
    window.history.scrollRestoration = "manual";

    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nathaniel Calimag | Web Developer</title>
        <meta
          name="description"
          content="Web developer and NUS Computer Science undergraduate from Singapore."
        />

        <meta property="og:title" content="Nathaniel Calimag | Web Developer" />
        <meta name="og:url" content="https://www.nathanielcalimag.com" />
        <meta
          property="og:description"
          content="Web developer and NUS Computer Science undergraduate from Singapore."
        />
        <meta property="og:image" content="/static/img/logo.png" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Nathaniel Calimag | Web Developer"
        />
        <meta name="twitter:site" content="https://www.nathanielcalimag.com" />
        <meta
          name="twitter:description"
          content="Web developer and NUS Computer Science undergraduate from Singapore."
        />
        <meta name="twitter:image" content="/static/img/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://www.nathanielcalimag.com" />
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
