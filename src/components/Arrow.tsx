const Arrow = ({
  className = "",
}: // color = "#000",
  {
    className?: string;
    // color?: string;
  }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    className={className}
  >
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
        fill="#fff" // issues with color url
      >
        <polygon points="0 2, 3 3.5, 0 5" />
      </marker>
    </defs>
    <line
      x1="40"
      y1="0"
      x2="40"
      y2="50"
      stroke="#fff" //{color}
      stroke-width="10"
      marker-end="url(#arrowhead)"
    />
  </svg>
);

export default Arrow;
