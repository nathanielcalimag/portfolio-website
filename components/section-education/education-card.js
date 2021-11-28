const EducationCard = (props) => {
  return (
    <div
      className={`flex-1 px-3 py-2 mb-8 shadow-lg lg:pb-4 rounded-xl ${props.cardClasses}`}
    >
      <p
        className={`-mb-2 text-sm font-semibold text-right sm:text-lg lg:text-xl ${props.textClasses}`}
      >
        {props.timeframe}
      </p>
      <h3 className="text-lg font-bold text-gray-700 text sm:text-xl lg:text-2xl">
        {props.institute}
      </h3>
      {props.children}
    </div>
  );
};

export default EducationCard;
