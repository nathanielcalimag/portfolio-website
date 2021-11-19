import Link from "next/link";

const HeroButton = (props) => {
  return (
    <Link href="/">
      <a
        className={`w-full py-3 text-xl font-semibold rounded-lg shadow-md ${props.classes}`}
      >
        {props.text}
      </a>
    </Link>
  );
};

export default HeroButton;
