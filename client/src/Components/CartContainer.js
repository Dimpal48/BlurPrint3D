import React from 'react';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";

const CartContainer = () => {
    const [{ cartShow }, dispatch] = useStateValue();

    const showCart=()=>{
        dispatch({
          type: actionType.SET_CART_SHOW,
          cartShow: !cartShow,
        });
      }

    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }} className="fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-[101]">
            <div className="w-full flex items-center justify-between p-4 cursor-pointer">
                <motion.div whileTap={{ scale: 0.75 }}
                onClick={showCart}
                >
                    <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
                </motion.div>
                <p className="text-textColor text-lg font-semibold">Cart</p>
                <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                //   onClick={clearCart}
                >
                    Clear <RiRefreshFill />
                </motion.p>
            </div>
            <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
                <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/blueprint3d-ee0a0.appspot.com/o/ShopImages%2F1679117802946-wonderful%20shop2.jpg?alt=media&token=b3ebb87e-a0ad-4189-97e3-7b1f5d5458d9'
                            className='w-20 h-20 max-w-[60px] rounded-full object-contain' alt='' />
                        <div className=" flex flex-col gap-2">
                            <p className="text-gray-50 text-base ">Small Andalucia Tealight</p>
                            <p className="text-gray-400 text-sm block font-semibold">$ 8.5</p>
                        </div>

                        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiMinus className="text-gray-50" />

                            </motion.div>
                            <p className='w-5 h-5 rounded-sm text-gray-50 flex items-baseline
                        justify-center'>1</p>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiPlus className="text-gray-50" />

                            </motion.div>
                        </div>


                    </div>
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/blueprint3d-ee0a0.appspot.com/o/ShopImages%2F1679117802946-wonderful%20shop2.jpg?alt=media&token=b3ebb87e-a0ad-4189-97e3-7b1f5d5458d9'
                            className='w-20 h-20 max-w-[60px] rounded-full object-contain' alt='' />
                        <div className=" flex flex-col gap-2">
                            <p className="text-gray-50 text-base ">Small Andalucia Tealight</p>
                            <p className="text-gray-400 text-sm block font-semibold">$ 8.5</p>
                        </div>

                        <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiMinus className="text-gray-50" />

                            </motion.div>
                            <p className='w-5 h-5 rounded-sm text-gray-50 flex items-baseline
                        justify-center'>1</p>
                            <motion.div whileTap={{ scale: 0.75 }}>
                                <BiPlus className="text-gray-50" />

                            </motion.div>
                        </div>


                    </div>

                </div>


                <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                    <div className="w-full flex items-center justify-between">
                        <p className="text-gray-400 text-lg">Sub Total</p>
                        <p className="text-gray-400 text-lg">$ 8.5</p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <p className="text-gray-400 text-lg">Delivery</p>
                        <p className="text-gray-400 text-lg">$ 2.5</p>
                    </div>

                    <div className="w-full border-b border-gray-600 my-2"></div>

                    <div className="w-full flex items-center justify-between">
                        <p className="text-gray-200 text-xl font-semibold">Total</p>
                        <p className="text-gray-200 text-xl font-semibold">
                            {/* ${tot + 2.5} */} 11.5
                        </p>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        type="button"
                        className="w-full p-2 rounded-full bg-gradient-to-tr from-green-400 to-green-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                    >
                        Check Out
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}

export default CartContainer
