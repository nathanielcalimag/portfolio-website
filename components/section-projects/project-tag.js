const ProjectTag = (props) => {
  return (
    <li
      className={`inline-flex items-center gap-1 px-2 py-1 text-sm font-semibold rounded-full shadow sm:text-lg lg:text-xl lg:px-4 lg:py-2 lg:gap-2 ${props.classes}`}
    >
      <span className="w-5 h-5 lg:w-7 lg:h-7">{props.children}</span>
      <span>{props.technology}</span>
    </li>
  );
};

export default ProjectTag;
