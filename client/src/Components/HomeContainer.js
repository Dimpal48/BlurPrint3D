import React from "react";
import { Link } from "react-router-dom";
import { heroData } from "../utils/data";

function HomeContainer() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full h-auto "
      id="home"
    >
      <div className="py-2 px-6 flex-1 flex flex-col items-start md:items-center justify-center gap-0 relative">
        <div className="absolute top-16">
          <div className=" flex items-center  w-1/3 gap-2 justify-center bg-green-100 px-4 py-1 rounded-full">
            <p className="text-base text-green-500 font-semibold">
              <Link to="/" className="hover:text-red-300">
                Get an estimate
              </Link>
            </p>
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbPG4v13yxIcIM2w8igaKgblLmBdGaydkVvAniDdZox9ueItwougeqdcNEFNBaURieP4&usqp=CAU"
                className="w-full h-full object-contain"
                alt="Go"
              />
            </div>
          </div>
          <p className="text-[1.5rem]  flex flex-row md:text-[2rem] lg:text-[3rem] text-slate-100 gap-4 lg:gap-4">
            <h1 className="text-4xl text-textColor  text-opacity-95 lg:text-8xl my-5 lg:my-10 xl:my-10 2xl:my-10 sm:gap-4 flex flex-row gap-2">
              <span className="inline-block py-8 lg:py-10 lg:text-6xl text-2xl font-light">
                We'r
              </span>
              <span className="overflow-hidden inline-block py-8 lg:py-10 relative text-center lg:text-6xl text-2xl font-medium opacity-100 underline underline-offset-4">
                {/* <b className="hidden ">MATERIALIZE</b> */}
                <b className="visible">MATERIALIZE</b>
                {/* <b className="hidden">PASSIONATE</b> */}
              </span>
            </h1>
          </p>
          <p className="text-base text-lighttextGray font-semibold md:text-left lg:text-center pb-10  w-4/5">
            We are a team of idealistic architects, 3D artists, and constructors who have never ceased to play with architectural shapes and styles.  we could make something beautiful and valuable out of this passion: architectura lmodels in which the artistic elements, the geometry, and space came together naturally and wonderfully.

          </p>
          <Link
          to="/contact"
           
            className="bg-gradient-to-br from-green-100 to-green-300 hover:from-red-300 hover:to-red-400 w-full lg:w-auto md:w-auto
      px-4 py-2 sm:my-8 md:my-10 lg:my-20 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100
      text-green-600 font-semibold lg:hover:text-white md:hover:text-white  cursor-pointer"
          >
            Contact US
          </Link>
        </div>
      </div>
      <div>
        <div className="mt-64 md:mt-0 md:py-2 px-6 items-center flex-1 flex justify-center relative">
          <img
            src="https://konstruktion.vamtam.com/wp-content/uploads/2022/10/pexels-martin-pe%CC%81chy-2763969.png"
            className="ml-auto w-full h-650 lg:w-auto lg:h-510 md:w-auto md:h-510"
            alt="hero-bg"
          />

          <div className="w-full h-3/4 md:h-3/4 absolute top-auto  md:top-100 left-0 flex items-center justify-center  py-4 md:gap-10 lg:gap-20 xl:gap-10 2xl:gap-10 flex-wrap ">
            {heroData &&
              heroData.map((n) => (
                <div
                  key={n.id}
                  className="mb-3 lg:mb-0 md:min-w-[120px]  lg:min-w-[190px]  md:px-3 md:py-1 lg:p-4  top-10 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                >
                  <img
                    src={n.imgsrc}
                    className=" md:w-32 lg:w-40 md:-mt-12 lg:-mt-20 rounded-xl px-0"
                    alt="I1"
                  />
                  <p className="text-lg font-semibold text-textColor mt-2 lg:mt-2">
                    {n.name}
                  </p>
                  <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-2">
                    {n.title}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContainer;
