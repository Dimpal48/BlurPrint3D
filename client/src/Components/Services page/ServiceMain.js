import React from 'react';
import {
    MdQuestionAnswer,
    MdTry,
    MdComputer,
    MdBrightness7,
    MdPhotoLibrary,
    MdOutlineLabelImportant,
} from "react-icons/md";
import { Link } from "react-router-dom";

function ServiceMain() {
    return (
        <div>
            <div className='text-center flex justify-center py-8'>
                <h1 className='text-5xl text-purple-400 font-semibold '>OUR SERVICES</h1>
            </div>


            <div className='relative w-full'>
                <div class="relative  overflow-hidden rounded-lg after:clear-both after:block after:content-['']">
                    <div className="relative float-left ease-in-out py-14 px-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 transition-transform  "
                    >
                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                Architectural models Services
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                Architectural models are the most useful method you can take advantage of if you want to make people use all their senses 
                                in the process of discovering the buildings that are yet to be built.
                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>

                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                3D Rendering Services
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                This technique allows you to better highlight all the important features of your project from different angles and in great detail.
                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                Construction
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                When you partner with BluePrint3D, you not only get innovative solutions, you get our fully vested team and a commitment to doing things right. 
                                Our relentless focus on success leads to smarter more collaborative building practices.
                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                Design – Build
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                   
It begins with design development. Working hand-in-hand with our architect partners, we select an approach that meets your programmatic, budgetary, and aesthetic goals.

                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                Pre-Construction
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                    
We are here to ensure your project begins with the ultimate endgame in mind. Immel’s pre-construction services includes every aspect of your project’s scope.

                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                Lump-Sum Contracting
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                Contracting
The correct calculation of contract rates of the dredging project is crucial whether calculated as a unit cost or a lump sum price. A lump sum contract or “fixed fee contract” is a traditional means of procurement in which a single “lump sum” price for all of the works is agreed upon before the works starts.

                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                    photography & portrait
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                    Porttitor communicate pandemic data rather than enabled niche
                                    pandemic data rather markets neque pulvinar vitae.
                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                    photography & portrait
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                    Porttitor communicate pandemic data rather than enabled niche
                                    pandemic data rather markets neque pulvinar vitae.
                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                            <div className="text-center justify-center">
                                <MdPhotoLibrary
                                    size="5.0rem"
                                    className="align-middle inline py-4 text-green-500 "
                                />
                                <h1 className="capitalize text-black text-xl pt-2 pb-4 hover:text-green-600">
                                    photography & portrait
                                </h1>
                                <p className="px-10 pb-5 text-slate-800 leading-relaxed">
                                    Porttitor communicate pandemic data rather than enabled niche
                                    pandemic data rather markets neque pulvinar vitae.
                                </p>
                                <button
                                    type="button"
                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                >
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative w-full" >
                <div class="relative  overflow-hidden rounded-lg after:clear-both after:block after:content-['']">
                    <div className="relative float-left duration-700 ease-in-out py-14 px-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 transition-transform ">

                        <div className='max-w-sm bg-white  rounded-lg shadow-sky-700 dark:bg-gray-800 '>
                            <Link to="">
                                <img className="rounded-t-lg" src="https://zephyr.us-themes.com/wp-content/uploads/2014/09/shutterstock_92845171.jpg" alt="" />
                            </Link>
                            <div class="p-5">
                                <Link to="">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Top Skilled Team</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Mauris rhoncus pretium porttitor. Cras scelerisque commodo odio.
                                    Phasellus dolor enim, faucibus egestas scelerisque hendrerit, aliquet sed lorem.
                                </p>
                            </div>
                        </div>

                        <div className='max-w-sm bg-white  rounded-lg shadow-sky-700 dark:bg-gray-800 '>
                            <Link to="">
                                <img className="rounded-t-lg" src="https://zephyr.us-themes.com/wp-content/uploads/2014/09/kenburns3-1024x576.jpg" alt="" />
                            </Link>
                            <div class="p-5">
                                <Link to="">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Better Customer Support</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Mauris rhoncus pretium porttitor. Cras scelerisque commodo odio.
                                    Phasellus dolor enim, faucibus egestas scelerisque hendrerit, aliquet sed lorem.
                                </p>
                            </div>
                        </div>


                        <div className='max-w-sm bg-white rounded-lg shadow-sky-700 dark:bg-gray-800 '>
                            <video
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20221105184949/ezgif.com-gif-maker.mp4"
                                autoplay="{false}" loop muted
                                className="cursor-pointer">

                            </video>
                            <div class="p-5">
                                <Link to="">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Beautiful Office Space</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Mauris rhoncus pretium porttitor. Cras scelerisque commodo odio.
                                    Phasellus dolor enim, faucibus egestas scelerisque hendrerit, aliquet sed lorem.
                                </p>
                            </div>
                        </div>







                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServiceMain
