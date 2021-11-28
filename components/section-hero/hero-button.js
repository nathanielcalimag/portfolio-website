import { navigationHandler } from "../../includes/helpers";

const HeroButton = (props) => {
  return (
    <a
      className={`w-full py-3 text-xl font-semibold rounded-full shadow-md ${props.classes}`}
      href={props.href}
      onClick={navigationHandler}
    >
      {props.text}
    </a>
  );
};

export default HeroButton;
