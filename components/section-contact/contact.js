import SocialLinks from "../common/social-links";
import SvgEmail from "../svg/svg-email";
import SvgLogoGithub from "../svg/svg-logo-github";
import SvgLogoLinkedin from "../svg/svg-logo-linkedin";
import SvgLogoTwitter from "../svg/svg-logo-twitter";

const Contact = () => {
  const socialLinks = [
    {
      href: "https://github.com/nathanielcalimag",
      content: <SvgLogoGithub />,
    },
    {
      href: "https://twitter.com/nathaniel_ca",
      content: <SvgLogoTwitter />,
    },
    {
      href: "https://github.com/nathanielcalimag",
      content: <SvgLogoLinkedin />,
    },
  ];

  const copyEmailHandler = async () =>
    await navigator.clipboard.writeText("calimag.nat@gmail.com");

  return (
    <section>
      <div className="container px-4 pt-12 pb-24 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">
          Contact Me
        </h2>
        <SocialLinks
          socialLinks={socialLinks}
          listClasses="mb-8 mx-auto flex w-40 justify-between"
          linkClasses="w-9 h-9"
        />
        <div
          className="relative flex w-44 justify-between px-4 py-2 mx-auto bg-gray-50 rounded-xl"
          onClick={copyEmailHandler}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 opacity-40 blur -z-10" />
          <p className="font-semibold">Copy my email</p>
          <SvgEmail classes="w-7 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
