import React, { useEffect, useRef, useState } from 'react'
import {
  MdQuestionAnswer,
  MdTry,
  MdComputer,
  MdBrightness7,
  MdPhotoLibrary,
  MdOutlineLabelImportant,
} from "react-icons/md";


function HomeServices() {



  return (

    <>
      <div className="
    rounded-lg opacity-50 hover:opacity-60
    bg-[url('https://trendytheme.net/demo/matrox/assets/img/banner/banner-6.jpg')] bg-center bg-fixed bg-cover relative block ">
        {/* <img
      className="absolute bg-fixed"
      src="https://trendytheme.net/demo/matrox/assets/img/banner/banner-6.jpg"
      alt="bgImage"
     /> */}

        <div className="">
          <div className="relative text-center pt-11">
            <h1 className="pb-9 pt-56 sm:pt-20 md:pt-0 text-center text-6xl  font-sans text-slate-900 font-semibold">
              Our Services
            </h1>
            <p className="text-center px-16  lg:px-56 text-slate-900 leading-relaxed">
            The architectural models are a bridge between the architects’ projecting philosophy
             and the design ideas. They allow us to properly see what a real estate project will 
             look like upon completion, at a bigger or a smaller scale. They can be made to represent 
             a whole housing complex or a single apartment, 
            a mansion or an amusement park, a museum, or a cultural center.
            </p>
          </div>

          <div
            className="relative w-full"
          >

            <div class="relative  overflow-hidden rounded-lg after:clear-both after:block after:content-['']">

              <div className="relative float-left duration-700 ease-in-out py-14 px-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 transition-transform  "
              >

                <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                  <div className="text-center justify-center">
                    <MdPhotoLibrary
                      size="5.0rem"
                      className="align-middle inline py-4 text-green-500 "
                    />
                    <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                      Architectural models
                    </h1>
                    <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                      Architectural models are the most useful method you can take advantage of if you want to make people use all their senses
                      in the process of discovering the buildings that are yet to be built.
                    </p>
                    <button
                      type="button"
                      className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>

                <div className="bg-cardOverlay cursor-pointer hover:bg-green-300  backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                  <div className="text-center justify-center">
                    <MdOutlineLabelImportant
                      size="5.0rem"
                      className="align-middle inline py-4 text-green-500 "
                    />
                    <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                      3D Rendering Services
                    </h1>
                    <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                      The first step towards the success of your project is the vision. We can bring it to life through 3D digital design and 3D renderings. These renderings will help potential clients put things into perspective much more easily.
                    </p>
                    <button
                      type="button"
                      className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>

                <div className="bg-cardOverlay cursor-pointer hover:bg-green-300  backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                  <div className="text-center justify-center">
                    <MdComputer
                      size="5.0rem"
                      className="align-middle inline py-4 text-green-500 "
                    />
                    <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                    Animations
                    </h1>
                    <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                    The video format is among the most popular types of content in digital media. With the technological advancement and the evolution of the design software and tools, 
                    the videos we see today have higher quality, while also being more and more immersive.
                    </p>
                    <button
                      type="button"
                      className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>





              {/* <div className="relative hidden duration-700 ease-in-out py-14 px-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 transition-transform motion-reduce:transition-none" data-te-carousel-item>
                <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300  backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                  <div className="text-center justify-center">
                    <MdPhotoLibrary
                      size="5.0rem"
                      className="align-middle inline py-4 text-green-500 "
                    />
                    <h1 className="capitalize text-slate-900 text-xl pt-2 pb-4 hover:text-green-600">
                      photography & portrait
                    </h1>
                    <p className="px-10 pb-5 text-slate-600 leading-relaxed">
                      Porttitor communicate pandemic data rather than enabled niche
                      pandemic data rather markets neque pulvinar vitae.
                    </p>
                    <button
                      type="button"
                      className="pb-7 text-slate-500 hover:text-green-700 decoration-transparent "
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>

                <div className="bg-cardOverlay cursor-pointer hover:bg-green-300  backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                  <div className="text-center justify-center">
                    <MdOutlineLabelImportant
                      size="5.0rem"
                      className="align-middle inline py-4 text-green-500 "
                    />
                    <h1 className="capitalize text-slate-900 text-xl pt-2 pb-4 hover:text-green-600">
                      website hosting
                    </h1>
                    <p className="px-10 pb-5 text-slate-600 leading-relaxed">
                      Porttitor communicate pandemic data rather than enabled niche
                      pandemic data rather markets neque pulvinar vitae.
                    </p>
                    <button
                      type="button"
                      className="pb-7 text-slate-500 hover:text-green-700 decoration-transparent "
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>

                <div className="bg-cardOverlay cursor-pointer hover:bg-green-300  backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                  <div className="text-center justify-center">
                    <MdComputer
                      size="5.0rem"
                      className="align-middle inline py-4 text-green-500 "
                    />
                    <h1 className="capitalize text-slate-900 text-xl pt-2 pb-4 hover:text-green-600">
                      Web Design & development
                    </h1>
                    <p className="px-10 pb-5 text-slate-600 leading-relaxed">
                      Porttitor communicate pandemic data rather than enabled niche
                      pandemic data rather markets neque pulvinar vitae.
                    </p>
                    <button
                      type="button"
                      className="pb-7 text-slate-500 hover:text-green-700 decoration-transparent  "
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
                
              </div> */}

            </div>



          </div>
        </div>
      </div>
    </>
  );
}

export default HomeServices;
