const SkillsListItem = (props) => {
  return (
    <li className="relative">
      <div
        className={`h-14 w-14 p-2.5 flex items-center justify-center rounded-full shadow z-10 absolute -translate-y-1/2 top-1/2
          ${props.logoClasses}`}
      >
        {props.children}
      </div>
      <p
        className={`flex-1 py-2 pl-7 pr-3 ml-8 tracking-wide shadow-md rounded-xl flex justify-between items-center text-gray-700 ${
          props.nameClasses
        } ${props.reveal ? "scale-x-100" : "-translate-x-1/2 scale-x-0"}`}
        style={{
          transitionDelay: `${props.delay}s`,
          transitionDuration: "0.7s",
        }}
      >
        {props.name}{" "}
        <span
          className={`font-mono text-xs tracking-tighter ${props.codeClasses}`}
        >
          {props.code}
        </span>
      </p>
    </li>
  );
};

export default SkillsListItem;
