const SectionHeader = ({ bannerClass, title, subtitle }) => {
  return (
    <div className={`sectionHeader ${bannerClass}`}>
      <div className="overlayFilter"></div>
      <div className="wrapper">
        <h1>
          {title}
          {subtitle && <span className="subtitle">{subtitle}</span>}
        </h1>
      </div>
    </div>
  );
};
export default SectionHeader;
