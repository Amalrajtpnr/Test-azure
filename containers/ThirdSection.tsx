import React from "react";
import Quality from "../components/Quality";

export default function ThirdSection() {
  return (
    <div className="w-full lg:h-[100vh]  sm500:h-[35vh] sm300:[100vh] flex flex-col items-center justify-between mt-10">
      <div className="w-[88%] lg:h-[40%]  sm300:h-[40%] sm500:h-[40%] flex flex-col lg:items-start sm500:items-start  sm300:items-center justify-start">
        <h1 className="lg:text-[30px] sm300:text-[20px]  sm500:text-[25px] text-[#004E2B] text-left font-bold">
          More reason to trust us...
        </h1>
        <Quality />
      </div>
      <div className="w-[88%] h-[55%]  flex lg:flex-row sm300:flex-col sm500:flex-row lg:items-start sm500:items-start sm300:items-center justify-center sm300:mt-8 lg:mt-0 ">
        <div className="lg:w-[50%]  sm500:w-[50%] sm300:w-[100%] h-[75%]  flex flex-col lg:items-start sm500:items-start sm300:items-center justify-between">
          <h1 className="lg:text-[30px] sm300:text-[20px] sm500:text-[25px] text-[#004E2B] lg:text-left sm500:text-left sm300:text-center font-bold">
            Envropack care about the nature
          </h1>
          <h1 className="lg:text-[20px]  sm300:text-[15px] sm500:text-[18px] text-[#004E2B] lg:text-left sm500:text-left sm300:text-center font-light sm300:mt-2 lg:mt-0 ">
            Environmentally friendly disposable packages represent a significant
            step toward a more sustainable future. They are designed with
            biodegradable or compostable materials, employ recycling, and
            prioritize the use of sustainable resources. These packages reduce
            plastic waste and minimize the carbon footprint of production. By
            choosing these options, consumers support eco-conscious practices,
            foster environmental awareness, and contribute to a cleaner, greener
            planet.
          </h1>
        </div>
        <img src="/images/plantmb.jpg" alt="" className="lg:w-[50%] sm300:w-[100%] h-[100%] lg:hidden  sm500:hidden" />
        <img src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/plant.jpg?alt=media&token=d4eb77d1-c907-4ff0-9909-24ce32f485ae&_gl=1*ck7tku*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5ODkzNTk1Ny4zLjEuMTY5ODkzNjI0My41My4wLjA." alt="" className="lg:w-[50%] sm300:w-[100%] sm500:w-[50%] h-[100%] lg:flex sm300:hidden sm500:flex" />

      </div>
    </div>
  );
}
