const Tag = ({ item }) => {
  return (
    <span className="inline-block border border-primary/40 bg-primary/5 text-primary rounded-full px-3 py-1 text-sm cursor-default">
      {item}
    </span>
  );
};

export default Tag;
