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
        className={`flex items-center justify-between flex-1 py-2 pr-3 ml-8 tracking-wide text-gray-700 shadow-md pl-7 rounded-xl ${
          props.nameClasses
        } ${props.reveal ? "scale-x-100" : "-translate-x-1/2 scale-x-0"}`}
        style={{
          transitionDelay: `${props.delay}s`,
          transitionDuration: "0.7s",
        }}
      >
        {props.name}{" "}
        <span
          className={`font-mono text-xs tracking-tighter sm:text-sm lg:text-xs xl:text-sm ${props.codeClasses}`}
        >
          {props.code}
        </span>
      </p>
    </li>
  );
};

export default SkillsListItem;
