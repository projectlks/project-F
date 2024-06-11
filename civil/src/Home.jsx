import logo from "./assets/Harmony Dreams.jpg";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

import React from 'react'

 function MenuValue({value}) {
  return (
    <li className="hover:text-red-500 md:w-auto md:rounded-full w-[300px] hover:bg-red-300 px-3 py-2 cursor-pointer transition duration-300 ease-in-out">
      {value}
    </li>
  );
}
 



function App() {
const [isShow, setIsShow] = useState(true)
 const [screenWidth, setScreenWidth] = useState(window.innerWidth);
let value = ["Home", "About", "Services", 'Contact'];



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
     if (screenWidth > 500) {
       setIsShow(true);
     } else {
       setIsShow(false);
     }
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [screenWidth]);

  useEffect(()=>{

   Aos.init({
     offset: 200, // Example offset value
     duration: 1500
   });
  },[])

  return (
    <>
      <section
        id="home"
        className="w-full relative transition-all  md:w-[90%] mx-auto bg-gray-400 h-screen p-4"
      >
        <nav className="flex shadow-md animate-top-to-bottom justify-between items-center rounded-md bg-white p-4 ">
          <div className="flex items-center">
            <img src={logo} alt="Harmony Dreams Logo" className="h-10 mr-2" />

            <span className="text-xl font-bold">Harmony Dreams</span>
          </div>
          <div>
            <ul
              className={` font-bold animate-right-to-left absolute md:static md:bg-transparent bg-blue-400 p-3 md:p-0 right-0 top-full flex-col md:flex-row  md:space-x-4 text-lg ${
                isShow ? "flex" : "hidden"
              }`}
            >
              {value.map((value, index) => (
                <MenuValue key={index} value={value} />
              ))}
            </ul>
            {/* humbuger menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 md:hidden  inline-block"
              onClick={() => {
                setIsShow((prev) => !prev);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
        <div
          className={`flex flex-col items-center justify-center text-center h-full text-white transition-opacity duration-1000`}
        >
          <h1 className="text-5xl font-bold mb-4 animate-left-to-right">
            Welcome to Harmony Dreams
          </h1>
          <p className="text-2xl mb-8 animate-fadeIn animate-right-to-left delay-200">
            Your dream vacation is just a click away
          </p>
          <button className="bg-white animate-zoom text-red-400 px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* about */}
      <section className="w-full md:mt-40 flex-col md:flex-row flex">
        <div className="md:w-1/2 w-full p-10 md:h-screen">
          <h1
            data-aos="slide-right"
            className="text-5xl w-full my-10 text-center font-extrabold "
          >
            About Us
          </h1>
          <p
            data-aos="slide-right"
            className="w-full pl-6 font-bold  text-gray-800 mb-6"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sed
            aliquam provident sunt sit quam rem porro, voluptate, atque laborum
            exetationem! Ab dolore consequatur autem nostrum optio vitae
            incidunt praesentium.
          </p>
          <p data-aos="slide-right" className="w-full">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sed
            aliquam provident sunt sit quam rem porro, voluptate, atque laborum
            exercitationem! Ab dolore consequatur autem nostrum optio vitae
            incidunt praesentium.
          </p>
        </div>
        <div
          data-aos="slide-left"
          className="md:w-1/2 w-full h-screen border-l-2 p-10"
        >
          <div className=" w-full h-full bg-gray-800 animate-pulse "></div>
        </div>
      </section>

      {/* something */}
      <section className="w-full my-10 grid mx-auto gap-6 mb-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:w-[80%] h-auto">
        <div
          data-aos="slide-up"
          className="w-[90%] mx-auto h-[500px] animate-pulse bg-red-700"
        ></div>
        <div
          data-aos="slide-up"
          data-aos-delay="150"
          className="w-full h-[500px] bg-red-700"
        ></div>
        <div
          data-aos-delay="250"
          data-aos="slide-up"
          className="w-full h-[500px] bg-red-700"
        ></div>
      </section>
    </>
  );
}

export default App;
