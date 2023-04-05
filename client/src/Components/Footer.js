import React from 'react'
import { Link } from 'react-router-dom';
import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiGoogleFill, RiLinkedinFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";
import {motion} from "framer-motion"

function Footer() {
    return (
        <footer className='bg-neutral-700 text-center text-white w-full'>
            <div className='container px-6 pt-6 bg-neutral-700'>
                <motion.div className='mb-6 flex justify-center  flex-col'>
                    <Link
                    to="/"
                     className='text-5xl font-semibold py-10 font-serif text-green-700 cursor-pointer'>BluePrint3D</Link>
                    <div className='flex flex-row items-center justify-center gap-4'>
                        <Link
                            to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                            className='w-10 h-10 rounded-md bg-neutral-800 cursor-pointer hover:bg-blue-600 flex items-center justify-center'>
                            <RiFacebookFill

                                className='text-white text-lg' />
                        </Link>
                        <Link
                         to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                         className='w-10 h-10 rounded-md bg-neutral-800 cursor-pointer hover:bg-sky-400 flex items-center justify-center'>
                            <RiTwitterFill className='text-white text-lg' />
                        </Link>
                        <Link
                         to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                         className='w-10 h-10 rounded-md bg-neutral-800 cursor-pointer hover:bg-pink-400 flex items-center justify-center'>
                            <RiInstagramFill className='text-white text-lg' />
                        </Link>
                        <Link
                         to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                          className='w-10 h-10 rounded-md bg-neutral-800 cursor-pointer hover:bg-red-400 flex items-center justify-center'>
                            <RiGoogleFill className='text-white text-lg' />
                        </Link>
                        <Link
                         to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                          className='w-10 h-10 rounded-md bg-neutral-800 cursor-pointer hover:bg-blue-800 flex items-center justify-center'>
                            <RiLinkedinFill className='text-white text-lg' />
                        </Link>
                        <Link
                         to="https://www.linkedin.com/in/caddman-3d-technologies-7aa6621b3/"
                          className='w-10 h-10 rounded-md bg-neutral-800 cursor-pointer hover:bg-neutral-500 flex items-center justify-center'>
                            <RxGithubLogo className='text-white text-lg' />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className='p-4 text-center pb-16 bg-neutral-900'>

                <Link
                to="/" className='text-green-500 px-1'>BluePrint3D</Link>
                © {new Date().getFullYear()} All Rights Reserved.
            </div>
        </footer>

    )
}

export default Footer
