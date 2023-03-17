import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    MdSubtitles,
    MdAttachMoney,
    MdCloudUpload,
    MdDelete,
} from "react-icons/md";

function CreateServices() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="w-full h-auto  p-8 md:p-4 lg:p-1 flex items-center justify-center">
            <div
                className="w-[90%] lg:w-[65%] xl:w-[55%] box-border  h-510 border-2  border-gray-900 rounded-lg
      flex flex-col items-center justify-center gap-4"
            >
                {fields && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`w-96 p-2 h-20 mt-2  rounded-md text-center text-white font-semibold ${alertStatus === "danger"
                            ? "bg-red-400 text-red-800"
                            : "bg-emerald-400 text-emerald-800"
                            }`}
                    >

                    </motion.p>
                )}
                <div
                    className="w-5/6 py-2 pt-8 px-4 border-b border-gray-900 flex
        items-center gap-3"
                >
                    <MdSubtitles className="text-xl text-gray-700" />
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Give me a title..."
                        className="w-full h-full  text-lg bg-transparent font-semibold
          outline-none border-none placeholder:text-gray-600 text-textColor"
                    />
                </div>
                {/* <div className="w-5/6">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full   font-semibold border-b-2 placeholder:text-gray-700 text-textColor border-gray-200 p-2 px-4 rounded-md cursor-pointer"
          >
            
            {categories &&
              categories.map((item) => (
                <option
                  key={item.id}
                  className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                  value={item.urlParamName}
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div> */}

        <div className="flex items-center md:items-end md:pb-5 py-2 px-12 w-full">
          <button
            type="button"
            className="w-full ml-0 md:ml-auto  px-12 py-2  md:w-auto border-none outline-none bg-gradient-to-br from-green-300 to-green-500 hover:from-red-200 hover:to-red-400  rounded-lg text-lg text-white font-semibold"
            // onClick={saveDetails}

          >
            Save
          </button>
        </div>


            </div>
        </div>
    )
}

export default CreateServices
