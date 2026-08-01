// A section heading + content block with a research-y serif title and a small
// accent rule to the left.
const Section = ({ children, title, subtitle }) => {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="font-serif text-2xl lg:text-3xl font-bold flex items-center gap-3">
          <span className="inline-block h-6 w-1.5 rounded-full bg-primary" />
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-base-content/60 pl-[18px]">{subtitle}</p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
