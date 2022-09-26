import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import img from "../images/RFW_logo.png";

function Banner() {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  function transistion() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transistion);

    return () => {
      window.removeEventListener("scroll", transistion);
    };
  }, []);

  return (
    <div>
      <div
        className={` ${
          show && "bg-[#064e3b] w-full h-[10vh]"
        } fixed z-20 top-0 w-full italic text-white py-6 px-6 lg:px-24 font-medium`}
      >
        <div className="flex justify-between">
          <div>
            <a href="/">
              <span>
                {" "}
                <img className="w-20 lg:w-32" src={img} alt="RFW Logo" />
              </span>
            </a>
          </div>
          <div className={` ${modal ? "hidden" : "lg:hidden mr-10"} `}>
            <button onClick={() => setModal(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={` ${
              modal ? " w-full" : "hidden lg:block ml-auto mt-4"
            }  `}
          >
            <div
              className={` ${
                modal
                  ? "inline-block cursor-pointer absolute right-[25px] text-[25px] top-[5vh] z-2"
                  : "hidden"
              } `}
              onClick={() => setModal(false)}
            >
              X
            </div>
            <ul
              className={` ${
                modal
                  ? " absolute  w-full flex flex-col left-0 right-0 text-center leading-[50px] w-full bg-[#064e3b] top-[10vh] min-h-fit "
                  : "font-montserrat font-bold"
              } `}
            >
              <li className="inline-block">
                <a className="" href="#">
                  Home
                </a>
              </li>
              <li className="inline-block xl:ml-6">
                <a className="" href="#">
                  For Education
                </a>
              </li>
              <li className="inline-block xl:ml-6">
                <a className="" href="#">
                  For Business
                </a>
              </li>
              <li className="inline-block xl:ml-6">
                <a className="" href="#">
                  Coaching
                </a>
              </li>
              <li className="inline-block xl:ml-6">
                <a
                  aria-current="page"
                  className=" border-2 rounded-[9999px] py-[0.5rem] px-[1rem] border-opacity-100 border-[rgba(2,249,128,var(--tw-border-opacity))]"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="inline-block xl:ml-6">
                <a className="" href="#">
                  Give
                </a>
              </li>
              <li className="inline-block xl:ml-6">
                <a className="" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" grid h-screen content-end bg-center bg-cover bg-no-repeat bg-[url('./images/contact_banner.png')] px-6 py-20 md:px-24">
        <div className=" text-white">
          <h1 className="italic leading-[45px] tracking-tight text-6xl lg:text-banner-title font-black relative">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
