import React, { useEffect, useRef, useState } from 'react';
import { AiTwotoneBank } from "react-icons/ai";
import { BiShieldQuarter } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiGoogleFill, RiLinkedinFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";
import {
    MdQuestionAnswer,
    MdTry,
    MdComputer,
    MdBrightness7,
    MdPhotoLibrary,
    MdOutlineLabelImportant,
} from "react-icons/md";


function AboutMain() {
    return (
        <div>
        <div className="py-1 pt-[1000px] sm:pt-[100px] md:pt-0">
            <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-1 gap-3 w-screen h-screen">
                <div className="pl-44  items-center justify-center">
                    <div className="lg:py-44 md:px-12 md pt-20">
                        <h1 className=" text-3xl  pb-8 text-textColor text-opacity-95 font-semibold">
                            About our
                            Company
                        </h1>
                        <p className="text-left text-base  text-slate-600 font-thin">
                        We are Blueprint Models and our story started back in 2011, at a much smaller scale. Back then we were building architectural models for contests and independent projects.

We also made a few of them in collaboration with professors from the University of Architecture and this was definitely a thing that helped us master the art of focusing on small details and the accuracy of the execution but also prepared us for what was yet to come.

Because this was a real turning point: the moment when people started noticing our craftsmanship and helped us take it to a whole new level. Little by little, we started to receive more important offers- for office buildings, sports complexes, and similar facilities.
That was when we launched the website and we understood that our passion for space, geometry, and architecture can be beautifully combined with other artistic elements to build visually appealing architectural models. We started crafting more complex and detailed mockups that could fascinate both the architects and the real estate brokers, along with their clients.

                        </p>

                    </div>
                </div>
                <div className=" px-6 items-center justify-center flex ">
                    <img
                        src="https://model-makers.co.uk/wp-content/uploads/2020/11/Social-2.jpg"
                        className="-ml-11 max-w-lg  h-350 w-full"
                        alt="about Us"
                    />
                </div>
            </div>
            </div>
            <div className='bg-slate-400 py-20 rounded-lg flex-col md:flex-row items-center justify-center grid grid-rows-1 md:grid-cols-3 gap-6 md:gap-4 '>
                <div className=''>
                    <AiTwotoneBank className='ml-10  text-4xl text-green-700 ' />
                    <h1 className='capitalize text-xl px-10 pt-2 pb-4'>Vision</h1>
                    <p className='px-10  text-slate-800 leading-relaxed"'>
We believe that when caring, ambitious people come together, anything is possible. We stand up for and do what’s right. We challenge conventions to drive meaningful, positive progress for our clients, our industry, and our communities. While we have distinct and diverse skills and perspectives, we’re united in our endless quest to redefine what’s possible.
</p>
                </div>
                <div className=''>
                    <BiShieldQuarter className='ml-10  text-4xl text-green-700 ' />
                    <h1 className='capitalize text-xl px-10 pt-2 pb-4'>Our Purpose </h1>
                    <p className='px-10  text-slate-800 leading-relaxed"'>BluePrint 3D was founded on the belief that every decision we make impacts people and communities. It’s why we put humanity at the center of everything we do. It’s why we bring together different voices and points of view so that what we create makes everyone’s life better. It’s why what we build will bring value to society long after our lifetime. And it’s why we never stop thinking about reshaping the future. </p>
                </div>
                <div className=''>
                    <AiTwotoneBank className='ml-10  text-4xl text-green-700' />
                    <h1 className='capitalize text-xl px-10 pt-2 pb-4 '>Our Position </h1>
                    <p className='px-10  text-slate-800 leading-relaxed"'>BluePrint 3D Group uses knowledge & foresight to shape the way people live, work, and connect. More than 135 years in the making, we’re one of the world’s largest development and construction companies. Together with our customers and the collective expertise of our 30,000+ teammates, we create innovative and sustainable solutions that support healthy living beyond our lifetime. </p>
                </div>
            </div>



            <div>
                <div className="mt-12
    rounded-lg opacity-50 hover:opacity-60
    bg-[url('https://trendytheme.net/demo/matrox/assets/img/banner/banner-6.jpg')] bg-center bg-fixed bg-cover relative block ">
                    {/* <img
      className="absolute bg-fixed"
      src="https://trendytheme.net/demo/matrox/assets/img/banner/banner-6.jpg"
      alt="bgImage"
     /> */}

                    <div className="">
                        <div className="relative text-center pt-11">
                            <h1 className="pb-9 pt-56 sm:pt-20 md:pt-0 text-center text-6xl  font-sans text-slate-900 font-semibold">
                                Awesome Team
                            </h1>
                            <p className="text-center px-16  lg:px-56 text-slate-900 leading-relaxed">
                        

We achieve this success without ever compromising our values by providing quality construction practices, effective communication, and a deep understanding of the building environment.
This experience ensures that each project is completed seamlessly and responsibly.York City

We believe in contributing to the greater good and encourage our team to explore opportunities to contribute to, participate in, and partner with organizations that embrace education, empathy, and enterprise

                            </p>
                        </div>

                        <div
                            className="relative w-full"
                        >

                            <div class="relative  overflow-hidden rounded-lg after:clear-both after:block after:content-['']">

                                <div className="relative float-left duration-700 ease-in-out py-14 px-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8 transition-transform  "
                                >

<div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                                        <div className="text-center justify-center">
                                            <div className='group relative items-center justify-center overflow-hidden cursor-default'>
                                                <img
                                                    className='rounded-t-lg align-middle  object-cover w-508 h-370 pb-5  group-hover:scale-125 transition-transform '
                                                    src='https://trendytheme.net/demo/matrox/assets/img/team/team-12.jpg'
                                                    alt='image'
                                                />


                                            </div>
                                            <div className='cursor-pointer pb-3'>


                                                <Link
                                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                                >
                                                    JOHN SMITH
                                                </Link>
                                                <h1 className="capitalize text-black text-xl pt-2  hover:text-green-600">
                                                    Product Designer
                                                </h1>
                                            </div>
                                            <div className='flex flex-row items-center justify-center py-4 gap-4'>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiFacebookFill

                                                        className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiTwitterFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiInstagramFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiLinkedinFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RxGithubLogo className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                                        <div className="text-center justify-center">
                                            <div className='group relative items-center justify-center overflow-hidden cursor-default'>
                                                <img
                                                    className='rounded-t-lg align-middle  object-cover w-508 h-370 pb-5  group-hover:scale-125 transition-transform '
                                                    src='https://www.caddman.com/wp-content/uploads/2020/12/2-2-parem-Saran-1.jpg'
                                                    alt='image'
                                                />


                                            </div>
                                            <div className='cursor-pointer pb-3'>


                                                <Link
                                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                                >
                                                    PAREM SARAH
                                                </Link>
                                                <h1 className="capitalize text-black text-xl pt-2  hover:text-green-600">
                                                    CEO
                                                </h1>
                                            </div>
                                            <div className='flex flex-row items-center justify-center py-4 gap-4'>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiFacebookFill

                                                        className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiTwitterFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiInstagramFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                               
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiLinkedinFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RxGithubLogo className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="bg-cardOverlay  cursor-pointer hover:bg-green-300 hover:backdrop-grayscale backdrop-blur-md rounded-lg flex flex-col items-center justify-center drop-shadow-lg">
                                        <div className="text-center justify-center">
                                            <div className='group relative items-center justify-center overflow-hidden cursor-default'>
                                                <img
                                                    className='rounded-t-lg align-middle  object-cover w-508 h-370 pb-5  group-hover:scale-125 transition-transform '
                                                    src='https://trendytheme.net/demo/matrox/assets/img/team/team-12.jpg'
                                                    alt='image'
                                                />


                                            </div>
                                            <div className='cursor-pointer pb-3'>


                                                <Link
                                                    className="pb-7 text-slate-700 hover:text-green-700 decoration-transparent "
                                                >
                                                    ABHILASH
                                                </Link>
                                                <h1 className="capitalize text-black text-xl pt-2  hover:text-green-600">
                                                    Managing Director
                                                </h1>
                                            </div>
                                            <div className='flex flex-row items-center justify-center py-4 gap-4'>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiFacebookFill

                                                        className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiTwitterFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiInstagramFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                               
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RiLinkedinFill className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                                <Link
                                                    to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                                                    className=' cursor-pointer  flex items-center justify-center'>
                                                    <RxGithubLogo className='text-black hover:text-red-900 text-lg' />
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMain
