import React from "react";
import InclinedImage from "../components/InclinedImage";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="w-full lg:h-[100vh] sm300:h-[150vh] sm500:h-[100vh] sm550:h-[30vh] flex flex-col items-center justify-start sm300:p-0 lg:p-0 sm500:p-6 sm500:box-border"
    >
      <div className="w-full lg:h-[50%] sm300:h-[50%] sm500:h-full  flex lg:flex-row sm300:flex-col sm500:flex-row items-center sm300:justify-start lg:justify-center ">
        <div className="lg:w-[52%] sm300:w-[95%] lg:h-full  sm500:h-full sm300:h-[50%] flex flex-col lg:items-start sm300:items-center sm500:items-start justify-start   sm300:mt-4 lg:mt-0">
          <h1 className="lg:text-[30px] sm300:text-[20px] sm500:text-[25px] lg:text-left sm500:text-left  sm300:text-center  text-[#004E2B] font-bold">
            What is ENVROPACK
          </h1>
          <h1 className="lg:text-[20px] sm300:text-[15px] lg:text-left sm500:text-left  sm500:text-[18px] sm300:text-center sm300:leading-relaxed text-left font-light lg:mt-4 sm300:mt-2">
            Envropack is a leading provider of premium eco-friendly and
            biodegradable packaging solutions. With a strong commitment to
            quality, safety, and sustainability, we have been serving the food
            service industries across several GCC markets for over a decade. Our
            mission is to become the top choice for complete disposable food
            packaging, offering hygienic and safe products that delight our
            customers
          </h1>
        </div>
     <InclinedImage/>
      </div>
      <div className="w-full h-[50%] flex flex-col   items-center justify-center sm300:mt-8 sm500:mt-4 lg:mt-0  ">
        <div className="lg:w-[88%] sm300:w-[88%] sm500:w-full h-full flex lg:flex-row  sm300:flex-col sm500:flex-row items-start justify-between ">
          <div className="lg:w-[35%] sm300:w-[100%]  sm500:w-[50%] lg:h-[100%] sm500:h-full sm300:h-[10%] flex flex-col lg:items-start sm500:items-start sm300:items-center justify-between  ">
            <h1 className="lg:text-[30px] sm300:text-[20px] sm500:text-[25px] text-[#004E2B] text-left font-bold">
              What we’re trying to solve
            </h1>
            <img src="/images/cup.jpg" alt="" className="lg:w-[100%] sm300:w-[100%] sm500:w-[95%] lg:h-[80%] sm300:h-[80%] sm500:h-[80%] lg:flex sm300:hidden sm500:flex" />
          </div>{" "}
          <div className="lg:w-[60%] lg:h-full  sm300:h-full sm500:w-[50%] flex flex-col items-start justify-center sm500:mt-5 sm300:mt-2 lg:mt-0">
            <h1 className="lg:text-[20px] sm300:text-[15px] sm500:text-[18px] lg:text-left sm300:text-center sm500:text-left sm300:leading-relaxed font-light ">
              Our mission is to become the number one provider complete
              Disposable ,food packaging solutions in quality, hygienic and safe
              products which offers customer Delight. Our mission is to undergo
              progressive &sustainable growth in international markets. We are
              the conscious choice and ethical supplier providing a variety of
              customizable options. we provide a range of eco friendly and
              biodegradable products for all industries.
            </h1>
            <img src="/images/cup.jpg" alt="" className="w-[100%] sm500:mt-6 sm300:mt-2 lg:mt-0 h-[80%] sm300:flex lg:hidden sm500:hidden" />

          </div>
        </div>
      </div>
    </div>
  );
}
