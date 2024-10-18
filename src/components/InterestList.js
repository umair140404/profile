import Interest from "./Interest";

const InterestsList = ({ interests }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest, index) => (
        <Interest key={index} interest={interest} />
      ))}
    </div>
  );
};

export default InterestsList;
