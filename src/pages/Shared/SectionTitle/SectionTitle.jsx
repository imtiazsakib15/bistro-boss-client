const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center">
      <span className="text-xs sm:text-sm text-yellow-400 font-medium">---{subtitle}---</span>
      <p className="text-xl sm:text-3xl md:text-4xl font-semibold uppercase border-y-2 px-8 py-2.5 sm:px-14 sm:py-4 w-max mx-auto mt-2 sm:mt-3">{title}</p>
    </div>
  );
};

export default SectionTitle;
