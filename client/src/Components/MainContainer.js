import React from "react";
import HomeContainer from "./HomeContainer";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import RowContainer from "./RowContainer";
import {motion}  from "framer-motion";
import { MdChevronLeft, MdChevronRight} from "react-icons/md";

function MainContainer() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <HomeAbout />
      <HomeServices />

      <section className="w-full py-8">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-green-900 transition-all ease-in-out duration-100">
            Top Products  of {new Date().getFullYear()}
          </p>

          <div className="hidden md:flex gap-3 items-center">
          <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-400 hover:bg-green-600 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              // onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-400 hover:bg-green-600  cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              // onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          // scrollValue={scrollValue}
          flag={true}
          // data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>
    </div>
  );
}

export default MainContainer;
