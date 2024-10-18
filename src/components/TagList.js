import Tag from "./Tag";

const TagList = ({ itemList }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
      {itemList.map((item, index) => (
        <Tag key={index} item={item} />
      ))}
    </div>
  );
};

export default TagList;
