const Tag = ({ item }) => {
  
  return (
    <div className="border border-primary rounded-lg p-2 cursor-default">
      <span className="text-md">{item}</span>
    </div>
  );
};

export default Tag;
