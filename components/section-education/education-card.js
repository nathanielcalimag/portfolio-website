const EducationCard = (props) => {
  return (
    <div className={`px-3 py-2 mb-8 shadow-lg rounded-xl ${props.cardClasses}`}>
      <p
        className={`text-sm font-semibold text-right -mb-2 ${props.textClasses}`}
      >
        {props.timeframe}
      </p>
      <h3 className="text-lg font-bold text-gray-700">{props.institute}</h3>
      {props.children}
    </div>
  );
};

export default EducationCard;
