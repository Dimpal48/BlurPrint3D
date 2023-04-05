import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import {motion} from "framer-motion";


function HomeAbout() {
  return (
    <>
      <div className="py-1 pt-[1000px] sm:pt-[1500px] md:pt-0">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-1 gap-3 w-screen h-screen">
          <div className="pl-44  items-center justify-center">
          <div className="lg:py-48 pt-20">
            <h1 className=" text-3xl  pb-8 text-textColor text-opacity-95 font-semibold">
              About Us
            </h1>
            <p className="text-left text-base text-slate-600 font-thin">
            BluePrint3D have a great deal of patience and we are incredibly detail-oriented when it comes to creating dioramas,
             3D rendering, animations, and mockups. Yet, in time, we have learned to optimize our workflow to be able to deliver
              the best results at the right time,
             without straying away from the vision that has defined us. 
             This allows us to offer innovative solutions for our customers, solutions that are aimed 
             towards the streamlining of their real estate process. Add a healthy dose of professionalism and expertise to this 
             “recipe” and you can easily understand how we have managed to win over even the most demanding clients. 
            </p>
            <div className="flex items-center  gap-2 ">
              <button
                type="button"
                className="
            py-6  text-slate-800
            "
              >
                READ MORE
              </button>
              <MdOutlineArrowRightAlt className="text-green-700 cursor-pointer" />
            </div>
            </div>
          </div>
          <div className=" px-6 items-center justify-center flex ">
            <img
              src="https://template.bepd.dev/bussible/assets/img/tablet.png"
              className="-ml-11 max-w-lg h-350 "
              alt="about Us"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
