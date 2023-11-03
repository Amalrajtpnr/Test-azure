import React from 'react'
import styles from "../styles/Home.module.css";


export default function InclinedImage() {
  return (
    <div className="lg:w-[35%] sm300:w-[80%] lg:h-full sm300:h-[50%] sm500:h-full lg:flex  flex-col items-center justify-center relative sm500:mb-10 sm300:mb-0 lg:mb-0">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/I1.jpg?alt=media&token=df3c4430-34de-40f9-acba-05eb9e29595d"
      alt=""
      className={` absolute lg:top-[10%] sm300:top-[8%] sm500:top-[20%]  lg:w-[65%] sm300:w-[65%] sm500:w-[60%] sm500:h-[50%] lg:h-[65%] sm300:h-[50%] lg:right-0 sm300:right-[5%] sm500:right-[7%] rounded-2xl z-[100]`}
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/delivery.jpg?alt=media&token=2a0ca635-2ff9-4978-96af-ac213c2f635e&_gl=1*10z5yk4*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5ODkzNTk1Ny4zLjEuMTY5ODkzNjQ0NC42LjAuMA.."
      alt=""
      className={` lg:w-[65%] lg:h-[65%] sm300:h-[50%]  absolute lg:bottom-[6%] sm500:w-[60%] sm500:h-[50%] sm500:bottom-0  sm300:bottom-[8%] lg:right-[20%] sm500:left-[5%] sm300:left-0 lg:left-[8%] sm300:right-[27%] rounded-2xl   `}
    />
  </div>
  )
}
