const ProjectTag = (props) => {
  return (
    <li
      className={`inline-flex shadow items-center gap-1 text-sm font-semibold rounded-full px-2 py-1 ${props.classes}`}
    >
      <span className="w-5 h-5">{props.children}</span>
      <span>{props.technology}</span>
    </li>
  );
};

export default ProjectTag;
