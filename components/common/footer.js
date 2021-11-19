import SocialLinks from "./social-links";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/nathanielcalimag",
      content: "Github",
    },
    {
      href: "https://twitter.com/nathaniel_ca",
      content: "Twitter",
    },
    {
      href: "https://github.com/nathanielcalimag",
      content: "Linkedin",
    },
  ];
  return (
    <footer className="container px-4 py-8 mx-auto font-mono text-center bg-gray-100">
      <p className="font-bold">Nathaniel Calimag</p>
      <SocialLinks
        socialLinks={socialLinks}
        listClasses="text-sm mb-2"
        linkClasses="inline"
        separator=" • "
      />
      <p className="text-xs">Made with Next.js, React and Tailwind CSS.</p>
      <p className="text-xs">© 2021 Nathaniel Calimag. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
