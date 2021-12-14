import { navigationHandler } from "../../includes/helpers";

const HeroButton = (props) => {
  return (
    <a
      className={`w-full py-3 text-xl font-semibold rounded-full shadow-md ${props.classes}`}
      href={props.href}
      onClick={!props.external ? navigationHandler : null}
      target={props.external ? "_blank" : null}
      rel="noreferrer"
    >
      {props.text}
    </a>
  );
};

export default HeroButton;
