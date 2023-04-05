import React, {useEffect,useRef} from 'react'
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";


function RowContainer({ flag, data,scrollValue }) {
  
    const rowContainer = useRef();


    useEffect(() => {
      rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);


    return (
        <div 
         ref={rowContainer}
        className={`w-full flex items-center gap-3 bg-gradient-to-r from-green-300 from-green-200 rounded-md my-12 scroll-smooth
        ${flag
                ? "overflow-x-scroll scrollbar-none"
                : "overflow-x-hidden flex-wrap justify-center"
            }`}>
            {data && 
                data.map((item) => (
                    <div
                        key={item?.id}
                        className="w-275 h-[195px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                    >
                        <div className="w-full flex items-center justify-between">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={item.imageURL}
                                alt=""
                                className=" object-cover hover:drop-shadow-sm w-48 rounded-t-lg h-32 md:h-32 md:w-48  rounded-none rounded-l-lg"
                            />
                            <motion.div whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-full hover:text-white text-slate-800 bg-slate-100 hover:bg-green-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8">
                                <MdShoppingBasket className="" />
                            </motion.div>
                        </div>
                        <div className="w-full flex flex-col items-end justify-between p-4 leading-normal  -mt-3">
                            <p className="text-textColor tracking-tight font-semibold text-base md:text-lg">
                                {item.title}
                            </p>
                            <div className="flex items-center gap-8">
                                <p className="text-lg text-headingColor font-semibold">
                                    <span className="text-sm text-green-700">$</span>{item.price}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default RowContainer