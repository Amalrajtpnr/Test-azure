import React from 'react'

export default function Quality() {
  return (
    <div className="w-full lg:h-[60%] flex lg:flex-row sm300:flex-col sm500:flex-row items-center lg:justify-around sm300:justify-between lg:mt-8 sm500:mt-10 sm300:mt-8  ">
    <div className="lg:w-[10%] sm300:w-[30%] sm500:w-[20%] h-full flex flex-col items-center justify-start ">
      <img src="/images/list.jpg" alt="" />
      <h1 className="lg:text-[20px] sm300:text-[12px] sm500:text-[18px] text-[#004E2B] text-center font-normal lg:leading-6 sm500:leading-6 sm500:leading-6 sm300:leading-4  lg:mt-6 sm300:mt-2  ">
        Commitment to Quality
      </h1>
    </div>
    <div className="lg:w-[15%] sm300:w-[30%] sm500:w-[20%] h-full flex flex-col items-center justify-start sm300:mt-6 lg:mt-0">
      <img src="/images/hygiene.jpg" alt="" />
      <h1 className="lg:text-[20px] sm300:text-[12px] sm500:text-[18px] text-[#004E2B] text-center font-normal lg:leading-6 sm500:leading-6 sm300:leading-4  lg:mt-6 sm300:mt-2  ">
      Uncompromising Hygiene
      </h1>
    </div>{" "}
    <div className="lg:w-[22%] sm300:w-[30%] sm500:w-[20%] h-full flex flex-col items-center lg:justify-between sm500:justify-start  sm300:mt-6  lg:mt-0">
      <img src="/images/earth.jpg" alt="" />
      <h1 className="lg:text-[20px] sm300:text-[12px] sm500:text-[18px] text-[#004E2B] text-center font-normal lg:leading-6 sm500:leading-6 sm300:leading-4  lg:mt-6 sm300:mt-2 sm500: ">
      Safe and Environmentally Friendly
      </h1>
    </div>{" "}
    <div className="lg:w-[10%] sm300:w-[30%] sm500:w-[20%] h-full flex flex-col items-center justify-start  sm300:mt-6 lg:mt-0">
      <img src="/images/review.jpg" alt=""  />
      <h1 className="lg:text-[20px] sm300:text-[12px] sm500:text-[18px] text-[#004E2B] text-center font-normal lg:leading-6 sm500:leading-6 sm300:leading-4  lg:mt-6 sm300:mt-2     ">
      Customer Delight
      </h1>
    </div>{" "}
  </div>
  )
}
