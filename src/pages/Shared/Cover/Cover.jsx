import { Parallax } from "react-parallax";

const Cover = ({ img, coverTitle }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-190}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase ">{coverTitle}</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur odit ex voluptas aperiam recusandae nesciunt sint
              itaque blanditiis, velit natus illo amet inventore omnis aut
              temporibus quis id expedita eveniet.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
