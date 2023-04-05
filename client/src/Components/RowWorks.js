import React from 'react'
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

function RowWorks() {
    return (
        <div class="relative  overflow-hidden rounded-lg after:clear-both after:block after:content-['']">
            <div className="relative float-left  ease-in-out py-14 px-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 transition-transform duration-500 motion-reduce:transition-none">

                <div className=' text-center bg-cardOverlay  hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg
                 '>

                    <div className='group relative items-center justify-center overflow-hidden cursor-default'>
                        <img
                            className='rounded-t-lg align-middle  object-cover w-508 h-370 pb-5 group-hover:rotate-1 group-hover:scale-125 transition-transform '
                            src='https://www.blueprintmodels.com/wp-content/uploads/2018/04/Swiss-Lake-Residential-Housing-Architectural-Scale-Model.jpg'
                            alt='image'
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50 '>

                        </div>
                        <div className='absolute inset-0 flrx flex-col cursor-pointer items-center justify-center px-[50%]  text-center translate-y-[100%] group-hover:translate-y-[50%] translate-all'>
                            <div className='w-10 h-10 rounded-full hover:bg-white group-hover:bg-green-500 flex items-center justify-center '>
                                <AiFillEye className='group-hover:text-white hover:text-textColor text-lg ' />
                            </div>

                        </div>
                    </div>
                    <div className='cursor-pointer pb-3'>
                        <h1 className="capitalize text-black text-lg pt-2 pb-4 hover:text-green-600">
                        Swiss Lake Residential Housing Architectural 
                        </h1>

                        <Link
                            className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                        >
                            LEARN MORE
                        </Link>

                    </div>

                </div>

                <div className=' text-center bg-cardOverlay    hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg
                 '>

                    <div className='group relative items-center justify-center overflow-hidden cursor-default'>
                        <img
                            className='rounded-t-lg align-middle  object-cover w-508 h-370 pb-5 group-hover:rotate-1 group-hover:scale-125 transition-transform '
                            src='https://www.blueprintmodels.com/wp-content/uploads/2018/04/ISG-Residence-Real-Estate-Architectural-Scale-Model-600x479.jpg'
                            alt='image'
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50 '>

                        </div>
                        <div className='absolute inset-0 flrx flex-col cursor-pointer items-center justify-center px-[50%]  text-center translate-y-[100%] group-hover:translate-y-[50%] translate-all'>
                            <div className='w-10 h-10 rounded-full hover:bg-white group-hover:bg-green-500 flex items-center justify-center '>
                                <AiFillEye className='group-hover:text-white hover:text-textColor text-lg ' />
                            </div>

                        </div>
                    </div>
                    <div className='cursor-pointer pb-3'>
                        <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                        ISG Residence Real Estate Architectural Scale 
                        </h1>

                        <Link
                            className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                        >
                            LEARN MORE
                        </Link>

                    </div>

                </div>

                <div className=' text-center bg-cardOverlay    hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg
                 '>

                    <div className='group relative items-center justify-center overflow-hidden cursor-default'>
                        <img
                            className='rounded-t-lg align-middle  object-cover w-508 h-370 pb-5 group-hover:rotate-1 group-hover:scale-125 transition-transform '
                            src='https://www.blueprintmodels.com/wp-content/uploads/2018/04/Macheta-Metropolitan-Residence-Mihai-Bravu-THUMB.jpg'
                            alt='image'
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50 '>

                        </div>
                        <div className='absolute inset-0 flrx flex-col cursor-pointer items-center justify-center px-[50%]  text-center translate-y-[100%] group-hover:translate-y-[50%] translate-all'>
                            <div className='w-10 h-10 rounded-full hover:bg-white group-hover:bg-green-500 flex items-center justify-center '>
                                <AiFillEye className='group-hover:text-white hover:text-textColor text-lg ' />
                            </div>

                        </div>
                    </div>
                    <div className='cursor-pointer pb-3'>
                        <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                        Hotel Architectural Model
                        </h1>

                        <Link
                            className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                        >
                            LEARN MORE
                        </Link>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default RowWorks;
