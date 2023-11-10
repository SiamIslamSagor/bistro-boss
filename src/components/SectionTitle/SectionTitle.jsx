const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <div>
        <p className="text-[#D99904] text-center italic mb-8">
          --- {subHeading} ---
        </p>
      </div>
      <div className="text-center">
        <span className="text-center  uppercase font-medium text-4xl  border-y-4 py-3 px-8 ">
          {heading}
        </span>
      </div>
    </div>
  );
};

export default SectionTitle;
