const HeadingAndContent = ({ children, title }) => {
  return (
    <div className="space-y-4">
      <strong className="text-center lg:text-left text-3xl">{title}</strong>
      <div>{children}</div>
    </div>
  );
};

export default HeadingAndContent;
