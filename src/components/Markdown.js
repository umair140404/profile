import ReactMarkdown from "react-markdown";

// Renders a Markdown string with theme-aware links. Used for the bio and any
// other rich text stored in YAML.
const Markdown = ({ children, className = "" }) => {
  return (
    <div className={`space-y-4 leading-relaxed ${className}`}>
      <ReactMarkdown
        components={{
          a: ({ node, children, ...props }) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a
              className="link link-primary link-hover"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          ),
          p: ({ node, ...props }) => <p {...props} />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
