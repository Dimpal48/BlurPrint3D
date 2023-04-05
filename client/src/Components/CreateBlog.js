import React, { useState } from "react";

import { motion } from "framer-motion";
import { servicescat } from "../utils/data"
import { Loader } from "./index";
import {
    MdSubtitles,
    MdAttachMoney,
    MdCloudUpload,
    MdDelete,
} from "react-icons/md";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
   
  } from "firebase/storage";
import { TbFileDescription } from "react-icons/tb";
import { useStateValue } from "../context/StateProvider";
import { TagsInput } from "react-tag-input-component";
import { addDoc, collection, getDocs, orderBy, query, Query } from "firebase/firestore";
import { storage, firestore } from "../firebase";
import { getAllBlogsItems, saveItem } from "../utils/firebaseFunctions";
import { actionType } from "../context/Reducer";

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [tags, setTags] = useState("");
    const [category, setCategory] = useState(null);
    const [fields, setFields] = useState(false);
    const [trending, setTrending] = useState("no");
    const [imageAsset, setImageAsset] = useState(null);
    const [msg, setMsg] = useState(null);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [isLoading, setIsLoading] = useState(false);
    const [{ servicesItems }, dispatch] = useStateValue();



    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        console.log(imageFile);
        const storageRef = ref(
          storage,
          `BlogImages/${Date.now()}-${imageFile.name}`
        );
        // console.log(storageRef);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        console.log(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const uploadProgress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error);
            setFields(true);
            setMsg("Error while uploading : Try AGain 🙇");
            setAlertStatus("danger");
            setTimeout(() => {
              setFields(false);
              setIsLoading(false);
            }, 4000);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImageAsset(downloadURL);
              setIsLoading(false);
              setFields(true);
              setMsg("Image uploaded successfully 😊");
              setAlertStatus("success");
              setTimeout(() => {
                setFields(false);
              }, 4000);
            });
          }
        );
      };
    
      const deleteImage = () => {
        setIsLoading(true);
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(() => {
          setImageAsset(null);
          setIsLoading(false);
          setFields(true);
          setMsg("Image deleted successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      };

    const saveDetails = () => {
        setIsLoading(true);
        try {
            if ((!title || !imageAsset || !desc || !category)) {
                setFields(true);
                setMsg("Required fields can't be empty");
                setAlertStatus("danger");
                setTimeout(() => {
                    setFields(false);
                    setIsLoading(false);
                }, 4000);
            } else {
                const data = {
                    id: `${Date.now()}`,
                    title: title,
                    imageURL: imageAsset,
                    tags: tags,
                    category: category,
                    qty: 1,
                    desc: desc,
                };
                // saveItem(data);
                const dbRef = collection(firestore, "blogItems")
                addDoc(dbRef, data)
                setIsLoading(false);
                setFields(true);
                setMsg("Data Uploaded successfully 😊");
                clearData();
                setAlertStatus("success");
                setTimeout(() => {
                    setFields(false);
                }, 4000);

            }
        } catch (error) {
            console.log(error);
            setFields(true);
            setMsg("Error while uploading : Try AGain 🙇");
            setAlertStatus("danger");
            setTimeout(() => {
                setFields(false);
                setIsLoading(false);
            }, 4000);
        }

        fetchData();
    };

    const clearData = () => {
        setTitle("");
        setImageAsset(null);
        setDesc("");
        setCategory("Select Category");
        setTags("");
    };

    const fetchData = async () => {
        await getAllBlogsItems().then((data) => {
            dispatch({
                type: actionType.SET_BLOGS_ITEMS,
                blogsItems: data,
            })
        })
    }

    return (
        <div className="w-full h-auto  p-8 md:p-4 lg:p-1 flex flex-col items-center justify-center">
            <div className="text-center text-slate-800 font-bold text-2xl py-2">
                Create Blog
            </div>
            <div
                className="w-[90%] lg:w-[65%] xl:w-[55%] box-border  h-650 border-2  border-gray-900 rounded-lg
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
                        {msg}
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
                    <TagsInput
                        placeholder="Tags"
                        onChange={(e)=>setTags(e.target.value)}
                        className=""
                    />
                </div> */}

                <div
                    className="w-5/6 py-2  px-4   flex items-center gap-3"
                >
                    <p className="text-lg bg-transparent font-semibold outline-none   text-textColor">Is it trending blog ?</p>
                    <div className="form-check-inline mx-1">
                        <input
                            type="radio"
                            className="font-semibold outline-none   text-textColor"
                            value="yes"
                            name="radioOption"
                            checked={trending === "yes"}
                            onChange={(e) => setTrending(e.target.value)}
                        />
                        <label htmlFor="radioOption" className="font-semibold outline-none   text-textColor">
                            Yes&nbsp;
                        </label>
                        <input
                            type="radio"
                            className="form-check-input"
                            value="no"
                            name="radioOption"
                            checked={trending === "no"}
                            onChange={(e) => setTrending(e.target.value)}
                        />
                        <label htmlFor="radioOption" className="form-check-label font-semibold outline-none   text-textColor">
                            No
                        </label>
                    </div>
                </div>

                <div className="w-5/6">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="outline-none w-full   font-semibold border-b-2 placeholder:text-gray-700 text-textColor border-gray-200 p-2 px-4 rounded-md cursor-pointer"
                    >


                        {servicescat &&
                            servicescat.map((item) => (
                                <option
                                    key={item.id}
                                    className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                                    value={item.urlParamName}
                                >
                                    {item.name}
                                </option>
                            ))}

                    </select>
                </div>

                <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-900 w-5/6 h-225 md:h-340 cursor-pointer rounded-md">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            {!imageAsset ? (
                                <>
                                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                            <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                            <p className="text-gray-500 hover:text-gray-700 text-xl font-medium">
                                                Click here to upload
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            name="uploadimage"
                                            accept="image/*"
                                            onChange={uploadImage}
                                            className="w-0 h-0"
                                        />
                                    </label>
                                </>
                            ) : (
                                <>
                                    <div className="relative h-full">
                                        <img
                                            src={imageAsset}
                                            alt="uploaded image"
                                            className="w-full h-full object-cover"
                                        />
                                        <button
                                            type="button"
                                            className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                                            onClick={deleteImage}
                                        >
                                            <MdDelete className="text-white" />
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    )}



                    <div />

                </div>

                <div className="w-5/6 py-1 px-4 border-b border-gray-900 flex items-center gap-3">
                    <TbFileDescription className="text-gray-700 text-2xl" />
                    <input
                        type="text"
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Description"
                        className="w-full h-full text-lg bg-transparent font-semibold
               outline-none border-none placeholder:text-gray-600 text-textColor"
                    />
                </div>

                <div className="flex items-center md:items-end md:pb-5 py-2 px-12 w-full">
                    <button
                        type="button"
                        className="w-full ml-0 md:ml-auto  px-12 py-2  md:w-auto border-none outline-none bg-gradient-to-br from-green-300 to-green-500 hover:from-red-200 hover:to-red-400  rounded-lg text-lg text-white font-semibold"

                        onClick={saveDetails}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog
