// Large page title shown at the top of each routed page.
const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-10 border-b border-base-content/10 pb-6">
      <h1 className="font-serif text-3xl lg:text-4xl font-bold tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-base-content/60 text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default PageHeader;
