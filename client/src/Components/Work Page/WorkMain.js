import React, { useEffect, useState } from 'react';
import { servicescat } from "../../utils/data"
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

function WorkMain() {
    const [filter, setFilter] = useState('Uncategorize');

    useEffect(() => { }, [filter]);
    return (
        <div>
            <div className='text-center flex justify-center py-8 relative pt-11 flex-col'>
                <h1 className='text-5xl text-purple-400 font-semibold font-sans pb-9 pt-0 sm:pt-20 md:pt-0 text-center'>OUR WORKS</h1>
                <p className='text-center px-16  lg:px-56 text-slate-900 leading-relaxed'>The architectural models are a bridge between the architects’
                    projecting philosophy and the design ideas. They allow us to properly see what a real estate
                    project will look like upon completion, at a bigger or a smaller scale. They can be made to represent
                    a whole housing complex or a single apartment, a mansion or an amusement park, a museum, or a cultural center.</p>
                <p className='text-center px-16  lg:px-56 text-slate-900 leading-relaxed'>The architectural models are a bridge between the architects’
                    projecting philosophy and the design ideas. They allow us to properly see what a real estate
                    project will look like upon completion, at a bigger or a smaller scale. They can be made to represent
                    a whole housing complex or a single apartment, a mansion or an amusement park, a museum, or a cultural center.</p>
            </div>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">

                {servicescat && servicescat.map(servicescat => (
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        key={servicescat.id}
                        className={`group ${filter === servicescat.urlParamName ? "bg-violet-400" : "bg-white"
                            } w-28 min-w-[94px] h-16 cursor-pointer rounded-lg 
                         drop-shadow-xl flex flex-col gap-3 items-center 
                         justify-center duration-150 transition-all ease-in-out
                          hover:bg-violet-400`}
                        onClick={() => setFilter(servicescat.urlParamName)}>

                        <p className={`text-sm ${filter === servicescat.urlParamName
                            ? "text-white"
                            : "text-slate-600"
                            } font-semibold  group-hover:text-white font-sans`}>
                            {servicescat.name}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className='w-full flex items-center gap-3 rounded-md my-12 scroll-smooth overflow-x-hidden flex-wrap justify-center'>
            <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2018/04/Realistic-Housing-Architectural-Scale-Model-600x338.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Realistic Housing Architectural Model
                        </Link>
                       
                    </div>

                </div>


                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2022/09/model-maker-New-York-600x750.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Realistic Housing Architectural Model
                        </Link>
                       
                    </div>

                </div>


            
                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2018/04/Macheta-Metropolitan-Residence-Mihai-Bravu-THUMB.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Realistic Housing Architectural Model
                        </Link>
                       
                    </div>

                </div>




                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2022/12/Habacoa-Abaco-Resort-model-600x339.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Realistic Housing Architectural Model
                        </Link>
                       
                    </div>

                </div>




                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2022/07/House-With-Swimming-Pool-Model-600x400.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        House with Swimming Pool
                        </Link>
                       
                    </div>

                </div>




                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2022/03/architectural-models-1-600x400.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Sopra Hotel Architectural Model
                        </Link>
                       
                    </div>

                </div>

                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2021/07/Architectural-Scale-Model-600x455.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Central Residence Architectural Model
                        </Link>
                       
                    </div>

                </div>


                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2020/02/Apartment-Development-Model-600x400.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Apartment Building Model 
                        </Link>
                       
                    </div>

                </div>



                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2018/04/Realistic-Housing-Architectural-Scale-Model-600x338.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Realistic Housing Architectural Model
                        </Link>
                       
                    </div>

                </div>




                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2022/07/Hotel-Architectural-Model-600x400.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Hotel Architectural Model
                        </Link>
                       
                    </div>

                </div>



                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2022/02/Real-Estate-Development-Models-600x288.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Residential Building Models – Above
                        </Link>
                       
                    </div>

                </div>




                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2018/04/ISG-Residence-Real-Estate-Architectural-Scale-Model-600x479.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        ISG Residence Real Estate  Model
                        </Link>
                       
                    </div>

                </div>



                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2018/04/Swiss-Lake-Residential-Housing-Architectural-Scale-Model.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Swiss Lake Residential Housing Model
                        </Link>
                       
                    </div>

                </div>



                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2018/04/Arbo-Residential-Housing-Outside-Capital-City-Architectural-Scalae-Model.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Real Estate Development Models
                        </Link>
                       
                    </div>

                </div>

                
                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2022/08/Waste-and-recycling-centre-600x400.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Industrial Recycling Centre Model
                        </Link>
                       
                    </div>

                </div>

                
                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2020/10/Architectural-Models-600x338.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Top Zone Residence
                        </Link>
                       
                    </div>

                </div>

                
                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2023/01/charging-station-scale-model-600x336.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Electric vehicles charging station
                        </Link>
                       
                    </div>

                </div>

                
                <div className='w-275 h-[215px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-slate-100 rounded-lg py-2 mx-5 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className="w-full flex items-center justify-between">
                        <img
                            whileHover={{ scale: 1.1 }}
                            src="https://www.blueprintmodels.com/wp-content/uploads/2022/12/resort-scale-model-600x343.jpg"
                            alt=""
                            className=" object-cover hover:drop-shadow-sm w-full rounded-t-lg h-40 md:h-48 md:w-full  rounded-none rounded-l-lg"
                        />
                        
                    </div>
                    <div className="w-full flex flex-col items-start justify-between p-4 leading-normal pb-2  -mt-4">
                        <Link className="text-textColor tracking-tight font-normal text-base hover:text-purple-800">
                        Lagoon City Scale Model
                        </Link>
                       
                    </div>

                </div>






                </div>



        </div>
    )
}

export default WorkMain
