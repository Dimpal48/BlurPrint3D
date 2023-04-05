import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../../firebase";

function ShopMain({data}) {
    const settings = {


        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [shopItems, setItems] = useState([]);
    
    const fetchShopItems = async () => {
      const myCollection = collection(firestore, "ShopItems");
      const querySnapshot = await getDocs(myCollection);
  
      const items = querySnapshot.docs.map((doc) => doc.data());
      setItems(items);
    };
    useEffect(() => {
      fetchShopItems();
    }, [])
  


    return (
        <div>
            <div>
                <div className=' text-center justify-center py-5'>
                    <h1 className='text-3xl font-bold text-neutral-600'> Shop Items</h1>
                </div>

                <Slider {...settings}>
                    <div className='h-2/4 py-10 px-20'>
                        <img
                            src='https://demo.arrowtheme.com/modus/wp-content/uploads/2017/05/bg-fumiture2-countter.jpg?id=268'
                            alt='image'
                            className=' rounded-lg '
                        />
                    </div>
                    <div className='h-2/4 py-10 px-20' >
                        <img
                            src='https://demo.arrowtheme.com/modus/wp-content/uploads/2017/05/bg-fumiture2-countter.jpg?id=268'
                            alt='image'
                            className='h-2/4 
                    
                     rounded-lg'
                        />
                    </div>
                    <div className='h-2/4 py-10 px-20'>
                        <img
                            src='https://demo.arrowtheme.com/modus/wp-content/uploads/2017/05/bg-fumiture2-countter.jpg?id=268'
                            alt='image'
                            className='h-2/4 rounded-lg'
                        />
                    </div>

                </Slider>
            </div>
            <div className='w-full flex items-center gap-3 rounded-md my-12 scroll-smooth overflow-x-hidden flex-wrap justify-center'>
            {shopItems && 
                shopItems.map((item) => (
                <div key={item?.id} className='w-275 h-[195px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
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
           
        </div>
    )
}

export default ShopMain
