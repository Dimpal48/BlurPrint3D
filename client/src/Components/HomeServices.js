import React from "react";
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
          Quisque non erat mi. Etiam congue et augue sed tempus. Aenean sed
          ipsum luctus, scelerisque ipsum nec, iaculis justo. Sed at vestibulum
          purus, sit amet viverra diam nulla ac nisi rhoncus. Quisque non erat
          mi. Etiam congue et augue sed tempus. Aenean sed ipsum luctus,
          scelerisque ipsum nec, iaculis justo. Sed at vestibulum purus, sit
          amet viverra diam nulla ac nisi rhoncus.
        </p>
      </div>
      <div
        className="relative w-full"
        id="carouselExampleCaptions"

        data-te-carousel-init
        data-te-carousel-slide
      >
        <div class="relative  overflow-hidden rounded-lg after:clear-both after:block after:content-['']">
          <div className="relative float-left duration-700 ease-in-out py-14 px-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 transition-transform  motion-reduce:transition-none"  data-te-carousel-active
      data-te-carousel-item
      
      >
            <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
              <div className="text-center justify-center">
                <MdPhotoLibrary
                  size="5.0rem"
                  className="align-middle inline py-4 text-green-500 "
                />
                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                  photography & portrait
                </h1>
                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                  Porttitor communicate pandemic data rather than enabled niche
                  pandemic data rather markets neque pulvinar vitae.
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
                  website hosting
                </h1>
                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                  Porttitor communicate pandemic data rather than enabled niche
                  pandemic data rather markets neque pulvinar vitae.
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
                  Web Design & development
                </h1>
                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                  Porttitor communicate pandemic data rather than enabled niche
                  pandemic data rather markets neque pulvinar vitae.
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





          <div className="relative hidden duration-700 ease-in-out py-14 px-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 transition-transform motion-reduce:transition-none" data-te-carousel-item>
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
          </div>
        </div>



        <div class=" flex flex-row  pb-6 gap-2 list-none text-center justify-center" data-te-carousel-indicators>
          <button type="button" class="w-3 h-3 rounded-full bg-slate-900 hover:bg-green-800 flex-initial cursor-pointer -indent-[999px]   duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true" aria-label="Slide 1" data-te-target="#carouselExampleCaptions"
            data-te-slide-to="0"
            data-te-carousel-active></button>
          <button type="button" class="w-3 h-3 rounded-full bg-slate-900 hover:bg-green-800 flex-initial cursor-pointer -indent-[999px]   duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="false" aria-label="Slide 2" data-te-target="#carouselExampleCaptions"
            data-te-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full bg-slate-900 hover:bg-green-800 flex-initial cursor-pointer -indent-[999px]   duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="false" aria-label="Slide 3" data-te-target="#carouselExampleCaptions"
            data-te-slide-to="2"></button>

        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default HomeServices;
