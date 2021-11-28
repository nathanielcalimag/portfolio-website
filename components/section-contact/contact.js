import SocialLinks from "../common/social-links";
import SvgEmail from "../svg/svg-email";
import SvgLogoGithub from "../svg/svg-logo-github";
import SvgLogoLinkedin from "../svg/svg-logo-linkedin";
import SvgLogoTwitter from "../svg/svg-logo-twitter";
import SvgNotifications from "../svg/svg-notifications";

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
      href: "/",
      content: <SvgLogoLinkedin />,
    },
  ];

  const copyEmailHandler = async () =>
    await navigator.clipboard.writeText("calimag.nat@gmail.com");

  return (
    <section id="contact">
      <div className="container px-4 pt-12 pb-20 mx-auto lg:pt-20 lg:pb-36">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-center text-gray-800 lg:text-4xl">
              Contact Me
            </h2>
            <SocialLinks
              socialLinks={socialLinks}
              listClasses="mb-8 mx-auto flex w-48 justify-between"
              linkClasses="w-10 h-10"
            />
            <div
              className="relative flex items-center justify-between px-4 py-2 mx-auto cursor-pointer w-44 sm:w-56 bg-gray-50 rounded-xl group md:active:bg-blue-50"
              onClick={copyEmailHandler}
            >
              <div className="absolute inset-0 bg-gradient-to-r md:group-hover:blur-md md:transition md:duration-300 from-sky-400 to-blue-500 opacity-40 blur -z-10" />
              <p className="font-semibold lg:text-xl group-active:text-blue-800">
                Copy my email
              </p>
              <SvgEmail classes="w-7 h-auto sm:w-8" />
            </div>
          </div>
          <SvgNotifications classes="hidden md:block w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

<p className="absolute inset-0 bg-gradient-to-br -z-10"></p>;
