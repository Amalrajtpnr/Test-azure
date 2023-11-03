import React, { useState } from "react";
import Service from "../components/Service";
import emailjs from "@emailjs/browser";
import { ImSpinner4 } from "react-icons/im";

export default function ContactSection() {
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  type Error = {
    email: string;
    message: string;
  };

  const [error, setError] = useState<Error>({
    email: "",
    message: "",
  });

  const form = () => {
    // emailjs.sendForm("service_6lan7xp", "template_fcou23s", "#myForm").then(
    //   function (response) {
    //     console.log("SUCCESS!", response.status, response.text);
    //   },
    //   function (err) {
    //     console.log("FAILED...", err);
    //   }
    // );
    if (message.trim().length !== 0 && email.trim().length !== 0) {
      setloading(true);
      const templateParams = {
        email: email,
        message: message,
      };
      emailjs
        .send(
          "service_6lan7xp",
          "template_9nfj31d",
          templateParams,
          "eFkbMszW34bX3pAkq"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setloading(false);
          },
          (err) => {
            console.log("FAILED...", err);
            setloading(false);
          }
        );
    } else {
      if (message.trim().length === 0 && email.trim().length == 0) {
        setError({
          message: "message is required",
          email: "Email is required",
        });
      } else if (email.trim().length === 0) {
        setError({
          email: "Email is required",
          message: "",
        });
      } else {
        setError({
          email: "Message is required",
          message: "",
        });
      }
    }
  };

  return (
    <div className="w-full lg:h-[120vh] sm300:h-[165vh] sm500:h-[45vh] border border-green-800   flex flex-col items-center lg:justify-between sm500:justify-around sm300:justify-between lg:mt-10 sm300:mt-10 sm500:mt-0 ">
      <div
        id="services"
        className="w-[88%] lg:h-[45%] sm300:h-[45%] sm500:h-[40%]  flex flex-col lg:items-start sm500:items-start sm300:items-center justify-between border border-black "
      >
        <h1 className="lg:text-[30px] sm300:text-[20px] sm500:text-[25px] text-[#004E2B] text-left font-bold">
          We’re best in...
        </h1>
        <Service />
      </div>
      <div
        id="footer"
        className="lg:w-[100%] sm500:w-[88%] sm300:w-[100%] lg:h-[50%] sm300:h-[50%] sm500:h-[60%]  bg-white flex flex-row items-start justify-center  sm300:mb-5 sm500:mb-0 lg:mb-0 border border-red-400   "
      >
        <div className="lg:w-[45%] sm500:w-[50%] sm300:w-[90%] h-full  flex flex-col lg:items-start sm300:items-center justify-start border border-black">
          <h1 className="lg:text-[30px] sm300:text-[20px] sm500:text-[25px] text-[#004E2B] text-left font-bold">
            Contact US
          </h1>
          <h1 className="lg:text-[20px] sm300:text-[15px] sm500:text-[20px] text-[#004E2B]  text-left font-normal lg:mt-2 sm300:mt-0">
            Tell us how we can help you
          </h1>
          <form
            id="myform"
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="lg:w-[60%] sm300:w-[95%] sm500:w-[80%] lg:h-[70%] sm500:h-[80%] sm300:h-[70%]  border border-black flex flex-col lg:items-start sm300:items-center justify-between mt-4 "
          >
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.trim().length == 0) {
                  setError({ ...error, email: "Email is required" });
                } else {
                  setError({ ...error, email: "" });
                }
              }}
              className="w-full bg-[#F4F4F4] lg:h-[20%] sm300:h-[18%] sm500:h-[20%] lg:text-[16px] sm300:text-[13px] sm500:text-[18px] focus:outline-none p-5 box-border rounded-xl "
            />
            {error.email && (
              <span className="text-[11px] font-medium text-red-500 lg:text-[16px] sm300:text-[13px] sm500:text-[15px]">
                {error.email}
              </span>
            )}
            <textarea
              name="Message"
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value.trim().length == 0) {
                  setError({
                    email: "",
                    message: "Message is required",
                  });
                } else {
                  setError({ ...error, message: "" });
                }
              }}
              id=""
              rows={5}
              className="w-full lg:h-[40%] sm300:h-[30%] sm500:h-[40%] bg-[#F4F4F4] lg:text-[16px] sm300:text-[13px] sm500:text-[18px] rounded-xl focus:outline-none p-5 box-border"
            ></textarea>
            {error.message && (
              <span className="text-[11px] font-medium text-red-500 lg:text-[16px] sm300:text-[13px] sm500:text-[15px]">
                {error.message}
              </span>
            )}

            {loading ? (
              <div className="w-[35%] lg:h-[20%] sm300:h-[18%] bg-[#0A4364] flex flex-row items-center justify-center rounded-xl ">
                <ImSpinner4 color="white" size={25} className="animate-spin " />
              </div>
            ) : (
              <button
                onClick={form}
                className="w-[35%] lg:h-[15%] sm500:h-[15%] sm300:h-[18%] lg:text-[15px] sm300:text-[13px] sm500:text-[18px] bg-[#0A4364] text-white font-semibold rounded-xl focus:outline-none"
              >
                Submit
              </button>
            )}
          </form>
        </div>
        <div className="lg:w-[45%] sm500:w-[50%] h-full lg:flex sm500:flex sm300:hidden flex-col items-end justify-center   ">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/contactus.jpg?alt=media&token=ceaf38ce-36dc-4be0-8f73-95d725b7b4e6&_gl=1*5dmxka*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5ODkzNTk1Ny4zLjEuMTY5ODkzNTk1OC41OS4wLjA."
            alt=""
            className="lg:w-[100%] sm500:w-[80%] lg:h-[78%] "
          />
        </div>{" "}
      </div>
    </div>
  );
}
