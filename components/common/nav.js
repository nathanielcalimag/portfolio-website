import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./nav.module.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Select empty div at top of document
    const pageTop = document.getElementById("pageTop");

    // Set scrolled state depending on pageTop intersecting viewport
    const observer = new IntersectionObserver(
      (entries) => setScrolled(!entries[0].isIntersecting),
      { threshold: 1 }
    );
    observer.observe(pageTop);

    // return () => IntersectionObserver.unobserve(pageTop);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full px-4 py-2 transition duration-300 bg-blue-50
        ${scrolled ? "bg-opacity-90 shadow backdrop-blur-sm" : "bg-opacity-0"}`}
    >
      <nav>
        <ul
          className={`flex items-center gap-4 text-lg font-semibold ${styles.navLinks}`}
        >
          <li className="mr-auto">
            <Link href="/">
              <a className="inline-block text-xs font-bold leading-3 text-gray-800">
                Nathaniel
                <br />
                Calimag
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="">Projects</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a className="">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
