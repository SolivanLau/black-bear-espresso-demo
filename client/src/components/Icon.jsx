const Icon = ({ width, height, viewbox, icon }) => {
  return (
    <svg width={width} height={height} viewBox={viewbox}>
      <path d={icon} />
    </svg>
  );
};
export default Icon;
