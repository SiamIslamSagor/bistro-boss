import { Parallax } from "react-parallax";

const Cover = ({ img, coverTitle }) => {
  return (
    <Parallax
      className="mb-10"
      blur={{ min: -10, max: 10 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={290}
    >
      <div className="hero max-sm:max-h-[375px] sm:h-[600px] md:h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content md text-center text-neutral-content">
          <div className="max-w-xl sm:p-10 bg-[#00000065]">
            <h1 className="mb-5 text-5xl font-bold uppercase ">{coverTitle}</h1>
            <p className="mb-5">
              Lorem Ipsum has been the industry’s standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
