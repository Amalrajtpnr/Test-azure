import React from "react";

export default function Footer() {
  return (
    <div className="w-full lg:h-[40vh] sm300:h-[50vh] sm500:h-[35vh] bg-[#E6F0EC]   flex flex-col items-center justify-between  lg:p-6 sm300:p-6 sm500:p-16 box-border  ">
      <div className="lg:w-[93%]  lg:h-[80%] sm300:h-[100%] bg-[#E6F0EC] flex lg:flex-row sm300:flex-col lg:items-start sm300:items-center justify-between  ">
        <div className="lg:w-[30%] sm300:w-[90%] h-full  flex lg:flex-row sm300:flex-col items-center justify-start">
          <img src="/images/logo1.svg" alt="" className="lg:w-[20%] sm300:w-[30%] sm300:h-[50%] lg:h-[100%]" />
          <h1 className="lg:text-[55px] sm300:text-[30px] font-bold text-[#004E2B] ml-4">ENVROPACK</h1>
        </div>
        <div className="lg:w-[15%] sm300:w-[90%] sm500:h-[70%] lg:h-full sm300:h-[90%] flex flex-col font-mono lg:items-start sm300:items-center justify-around   ">
          <h1 className="lg:text-[17px] sm300:text-[15px] sm500:text-[25px] font-bold text-[#004E2B]">ENVROPACK</h1>
          <h1 className="lg:text-[15px] sm300:text-[15px] sm500:text-[25px] font-medium text-[#004E2B]">
            Mussafah 39
          </h1>
          <h1 className="lg:text-[15px] sm300:text-[15px] sm500:text-[25px] font-medium text-[#004E2B] ">Abudhabi, UAE</h1>
          <h1 className="lg:text-[15px] sm300:text-[15px] sm500:text-[25px] font-medium text-[#004E2B]">
            envropack@gmail.com
          </h1>

          <h1 className="lg:text-[15px] sm300:text-[15px] sm500:text-[25px] font-medium text-[#004E2B]">
            +971545994729
          </h1>
        </div>{" "}
      </div>
    </div>
  );
}
