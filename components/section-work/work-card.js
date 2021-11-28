import styles from "./work-card.module.css";

const WorkCard = (props) => {
  return (
    <div className="relative w-full py-6 overflow-hidden shadow-lg rounded-3xl bg-gradient-to-br lg:flex-1 sm:w-8/12">
      <div
        className={`absolute inset-0 bg-gradient-to-br -z-10 ${props.backgroundClasses} ${styles.workCard}`}
      />

      {props.svg}

      <div>{props.children}</div>
    </div>
  );
};

export default WorkCard;
