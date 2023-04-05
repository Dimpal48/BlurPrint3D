import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import RowContainer from "./RowContainer";
import WorkContainer from "./WorkContainer";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../firebase";
import HomeClient from "./HomeClient";
import HomeContact from "./HomeContact";
import {Link} from "react-router-dom";
import CartContainer from "./CartContainer";

function MainContainer() {
  const [{shopItems,cartShow}, setItems] = useState([]);
  const [scrollValue, setScrollValue] = useState(0);
  // let scrl = useRef(null);
  // const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  // const [scrolEnd, setscrolEnd] = useState(false);

  useEffect(() => { }, [scrollValue,cartShow]);




  const fetchShopItems = async () => {
    const myCollection = collection(firestore, "ShopItems");
    const querySnapshot = await getDocs(myCollection);

    const items = querySnapshot.docs.map((doc) => doc.data());
    setItems(items);
  };
  useEffect(() => {
    fetchShopItems();
  }, [])

  //New implaementaion 
  // const slide=(shift)=>{
  //   scrl.current.scrollLeft += shift;
  //   setscrollX(scrollX + shift);

  //   if (
  //     Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
  //     scrl.current.offsetWidth
  //   ) {
  //     setscrolEnd(true);
  //   } else {
  //     setscrolEnd(false);
  //   }
  // }

  // const scrollCheck = () => {
  //   setscrollX(scrl.current.scrollLeft);
  //   if (
  //     Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
  //     scrl.current.offsetWidth
  //   ) {
  //     setscrolEnd(true);
  //   } else {
  //     setscrolEnd(false);
  //   }
  // };




  // console.log(shopItems);

  return (
    <>
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <HomeAbout />

   
      <HomeServices  />
         

      <section className="w-full py-8">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-green-900 transition-all ease-in-out duration-100">
            Top Products  of {new Date().getFullYear()}
          </p>

          <div className="hidden md:flex gap-3 items-center">

            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-400 hover:bg-green-600 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-700)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>


            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-400 hover:bg-green-600  cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(+700)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>

          </div>
        </div>
        
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={shopItems}

        />
      </section>
      <WorkContainer/>
      {cartShow && (
        <CartContainer/>
      )}
      
      
      <HomeClient/>
      <div className="w-full bg-gradient-to-tl flex md:flex-row flex-col from-green-200 to-green-600 py-10 items-center text-center md:gap-16 gap-4 justify-center rounded-lg shadow-md">
        <h1 className="text-slate-200 text-lg md:text-2xl font-serif">ARE YOU READY FOR YOUR NEXT PROJECT ? </h1>
        <Link className="hover:text-slate-800 drop-shadow-2xl inline-block text-slate-100 bg-black hover:bg-slate-200 px-6 py-3">HIRE US</Link>
      </div>
      <HomeContact/>
     
    </div>
    
    </>
  );
}

export default MainContainer;
