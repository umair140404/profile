import Interest from "./Interest";

const InterestsList = ({ interests }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
      {interests.map((interest, index) => (
        <Interest key={index} interest={interest} />
      ))}
    </div>
  );
};

export default InterestsList;
