import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export default function NavBar() {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="w-full lg:h-[20%] sm500:h-[20%] sm300:h-[30%] bg-transparent flex  flex-row items-center lg:justify-between sm300:justify-start  lg:absolute sm500:absolute  ">
      <div className="lg:w-[40%]  sm300:w-[90%] h-full flex flex-row items-center lg:justify-start   lg:ml-[90px] sm300:ml-3 ">
        <img
          src="/images/logo1.svg"
          alt=""
          className="lg:w-[12%] sm300:w-[10%] sm500:w-[12%] h-full"
        />
        <h1 className="lg:text-[40px] sm300:text-[25px] sm500:text-[45px] font-bold text-[#004E2B]  lg:ml-4 sm300:ml-2 sm500:ml-6">
          ENVROPACK
        </h1>
      </div>
      <div className="w-[20%] h-full lg:hidden  sm300:flex sm500:hidden flex-col items-center justify-center ">
        <FaBars
          onClick={() => {
            setPopUp(!popUp);
          }}
          size={30}
        />
      </div>
      <div className="lg:w-[30%] sm500:w-[45%] h-full lg:flex sm300:hidden   sm500:flex  flex-row items-center justify-center ">
        <div className="w-full h-[50%] flex flex-row items-center justify-around rounded-l-2xl bg-transparent   backdrop-blur-[100px]   ">
          <a
            className="text-white  sm500:text-[15px] sm300:text-[16px] lg:text-[16px] font-semibold cursor-pointer"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-white sm500:text-[15px] sm300:text-[16px] font-semibold cursor-pointer"
            href="#about"
          >
            About Us
          </a>
          <a
            className="text-white sm500:text-[15px] sm300:text-[16px] font-semibold cursor-pointer"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-white sm500:text-[15px] sm300:text-[16px] font-semibold cursor-pointer"
            href="#footer"
          >
            Contact Us{" "}
          </a>
        </div>{" "}
      </div>
      {popUp && (
        <div className="w-full h-[40%] bg-transparent  backdrop-blur-[15px] sm300:flex lg:hidden flex-col items-center justify-start top-0   sm300:absolute p-5 box-border">
          <div className="w-full h-[10%] flex flex-col items-end justify-center ">
            <MdOutlineClose
              onClick={() => {
                setPopUp(false);
              }}
              size={30}
              color="black"
            />
          </div>{" "}
          <div className="w-full h-[80%] flex flex-col items-center justify-around ">
            <a
              className="text-black text-[16px] font-semibold cursor-pointer"
              onClick={() => {
                setPopUp(false);
              }}
              href="#home"
            >
              Home
            </a>
            <a
              className="text-black text-[16px] font-semibold cursor-pointer"
              onClick={() => {
                setPopUp(false);
              }}
              href="#about"
            >
              About Us
            </a>
            <a
              className="text-black text-[16px] font-semibold cursor-pointer"
              onClick={() => {
                setPopUp(false);
              }}
              href="#services"
            >
              Services
            </a>
            <a
              className="text-black text-[16px] font-semibold cursor-pointer"
              onClick={() => {
                setPopUp(false);
              }}
              href="#footer"
            >
              Contact Us{" "}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
