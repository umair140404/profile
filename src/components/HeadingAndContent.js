const HeadingAndContent = ({ children, title, id }) => {
  return (
    <div className="space-y-4 scroll-mt-20" id={id}>
      <strong className="text-center lg:text-left text-3xl">{title}</strong>
      <div>{children}</div>
    </div>
  );
};

export default HeadingAndContent;
