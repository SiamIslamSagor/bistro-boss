import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  const featuredBgStyle = {
    backgroundImage: `url(${featuredImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={featuredBgStyle} className="text-white bg-opacity-80 bg-fixed">
      <div className="bg-[#000000a5] py-16">
        <SectionTitle
          heading={"Featured Item"}
          subHeading={"check it out"}
        ></SectionTitle>
        <div className="lg:flex justify-center items-center py-8 px-16">
          <div>
            <img className="max-w-xl" src={featuredImg} alt="" />
          </div>
          <div className="md:ml-8">
            <div className="space-y-2 leading-5">
              <p>Nov 10, 2023</p>
              <p>WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis omnis commodi totam provident porro. Praesentium.
              </p>
            </div>
            <button className="btn btn-outline border-0 border-b-4 text-white mt-6">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
