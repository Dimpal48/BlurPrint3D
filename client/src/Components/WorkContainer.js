import React, { useEffect, useState } from 'react';
import { AiFillBug } from "react-icons/ai";
import { servicescat  } from "../utils/data";
import { motion } from "framer-motion";
import  RowWorks  from "./RowWorks";

function WorkContainer() {

    const [filter, setFilter] = useState('Decor');

    useEffect(() => { }, [filter]);

    return (
        <section className="w-full my-6" id="menu">
            <div className="w-full flex flex-col items-center justify-center">
                <p className="text-4xl text-center justify-center font-normal capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-24 before:h-1 before:-bottom-2 before:left-8 before:bg-gradient-to-tr from-green-400 to-green-600 transition-all ease-in-out duration-100 ">
                    Our Works
                </p>
                <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">

                    {servicescat  && servicescat .map(servicescat  => (
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            key={servicescat .id}
                            className={`group ${filter === servicescat .urlParamName ? "bg-green-600" : "bg-white"
                                } w-24 min-w-[94px] h-24 cursor-pointer rounded-lg 
                         drop-shadow-xl flex flex-col gap-3 items-center 
                         justify-center duration-150 transition-all ease-in-out
                          hover:bg-green-600`}
                            onClick={() => setFilter(servicescat .urlParamName)}>
                            <div className={`w-10 h-10 rounded-full ${filter === servicescat .urlParamName ? "bg-white" : "bg-green-800"} after:bg-red-400
                             group-hover:bg-cyan-50 flex items-center justify-center`}>
                                <AiFillBug className={` ${filter === servicescat .urlParamName ? "text-textColor" : "text-white"} group-hover:text-textColor text-lg`} />
                            </div>
                            <p className={`text-sm ${filter === servicescat .urlParamName
                                ? "text-white"
                                : "text-slate-600"
                                } font-semibold  group-hover:text-white`}>
                                {servicescat .name}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="w-full ">
                    <RowWorks flag={false} />
                </div>
            </div>
        </section>
    )
}

export default WorkContainer
