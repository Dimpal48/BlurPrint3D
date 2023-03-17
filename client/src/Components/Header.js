import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch, MdOutlineSegment } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";
import { app } from "../firebase";
import { Link } from "react-router-dom";

function Header() {
  const firebaseAuth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);
  const [isNav, setIsNav] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, googleProvider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const sidebaar = async () => {
    setIsNav(!isNav);
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen bg-slate-50 p-6 px-16">
      {/* {Desktop and tablets} */}
      <div className="hidden md:flex w-full h-full  p-4 ">
        <div className="flex items-center gap-2">
          <Link
            to={"/"}
            className="w-13  object-cover font-semibold text-green-600 italic"
          >
            BluePrint3D
          </Link>
        </div>

        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex items-center gap-10 ml-auto mr-auto justify-between"
        >
          <li className="text-base text-cartBg hover:text-green-500 duration-100 transition-all ease-in-out cursor-pointer">
            Home
          </li>
          <li className="text-base text-cartBg hover:text-green-500 duration-100 transition-all ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="text-base text-cartBg hover:text-green-500 duration-100 transition-all ease-in-out cursor-pointer">
            Work
          </li>
          <li className="text-base text-cartBg hover:text-green-500 duration-100 transition-all ease-in-out cursor-pointer">
            Services
          </li>
          <li className="text-base text-cartBg hover:text-green-500 duration-100 transition-all ease-in-out cursor-pointer">
            Shop
          </li>
          <li className="text-base text-cartBg hover:text-green-500 duration-100 transition-all ease-in-out cursor-pointer">
            Blog
          </li>
          <li className="text-base text-cartBg hover:text-green-500 duration-100 transition-all ease-in-out cursor-pointer">
            Contact Us
          </li>
        </motion.ul>

        <div className="relative flex items-center justify-center">
          <MdOutlineShoppingCart className="text-cartBg hover:text-green-500 text-2xl ml-8 cursor-pointer" />
          <div className=" absolute -top-2 right-0 w-5 h-5 rounded-full bg-green-900  hover:text-green-500 flex items-center justify-center cursor-pointer">
            <p className="text-xs text-white font-semibold">0</p>
          </div>
        </div>

        <div className="relative flex items-center justify-center pl-3">
          <MdSearch className="w-6 min-w-[25px] h-6 min-h-[25px] drop-shadow-xl text-cartBg  hover:text-green-500 cursor-pointer" />
        </div>

        <div className="relative">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="relative flex items-center justify-center pl-3"
            onClick={login}
          >
            {user ? (
              <img
                src={user.photoURL}
                className="w-8 min-w-[25px] h-8 min-h-[25px] drop-shadow-xl text-stone-500   hover:text-green-500  cursor-pointer rounded-full"
                alt={user.displayName}
              />
            ) : (
              <MdAccountCircle className="w-8 min-w-[25px] h-8 min-h-[25px] drop-shadow-xl text-stone-500  hover:text-green-500  cursor-pointer" />
            )}
          </motion.div>
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-red-300 shadow-xl rounded-lg  flex flex-col absolute top-8 right-0 "
            >
              {user && user.email === "dimpidimpal0@gmail.com" && (
                <Link to={"/additems"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-green-300 hover:rounded-sm  transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={()=>setIsMenu(false)}>
                    Add Items <MdAdd />
                  </p>
                </Link>
              )}

              <p
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-green-300 hover:rounded-sm transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
        <div className="relative flex items-center justify-center pl-3">
          <MdOutlineSegment className="w-6 min-w-[25px] h-6 min-h-[25px] drop-shadow-xl text-slate-700  hover:text-green-500 cursor-pointer" />
        </div>
      </div>

      {/* Mobile screen */}
      <div className="flex items-center justify-between md:hidden w-full h-full p-4">
        <div className="relative flex items-center justify-center pl-3">
          <MdOutlineSegment
            className="w-6 min-w-[25px] h-6 min-h-[25px] drop-shadow-xl text-slate-700  hover:text-green-500 cursor-pointer"
            onClick={sidebaar}
          />
          {isNav && (
            <motion.div className=" z-40 w-460 h-screen fixed bg-white shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200  shadow-xl rounded-lg flex flex-col absolute -top-8 -left-16">
              <div className="ml-7 divide-y-2">
                <div>
                  <div className="flex items-center justify-between py-3 bg-white">
                    <Link
                      to={"/"}
                      className="w-13  object-cover font-semibold text-green-600 italic"
                      onClick={()=>setIsMenu(false)}
                    >
                      BluePrint3D
                    </Link>
                    <div className="md:hidden">
                      <button
                        className="p-2 text-gray-700 rounded-md outline-none "
                        onClick={() => setIsNav(!isNav)}
                      >
                        {isNav ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                      isNav ? "block" : "hidden"
                    }`}
                  >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      <li className="text-base text-slate-500 hover:text-slate-800 duration-100 transition-all ease-in-out cursor-pointer"
                      onClick={()=>setIsMenu(false)}
                      >
                        Home
                      </li>
                      <li className="text-base text-slate-500 hover:text-slate-800 duration-100 transition-all ease-in-out cursor-pointer"
                      onClick={()=>setIsMenu(false)}>
                        About Us
                      </li>
                      <li className="text-base text-slate-500 hover:text-slate-800 duration-100 transition-all ease-in-out cursor-pointer"
                      onClick={()=>setIsMenu(false)}>
                        Work
                      </li>
                      <li className="text-base text-slate-500 hover:text-slate-800 duration-100 transition-all ease-in-out cursor-pointer"
                      onClick={()=>setIsMenu(false)}>
                        Services
                      </li>
                      <li className="text-base text-slate-500 hover:text-slate-800 duration-100 transition-all ease-in-out cursor-pointer"
                      onClick={()=>setIsMenu(false)}>
                        Shop
                      </li>
                      <li className="text-base text-slate-500 hover:text-slate-800 duration-100 transition-all ease-in-out cursor-pointer"
                      onClick={()=>setIsMenu(false)}>
                        Blog
                      </li>
                      <li className="text-base text-slate-500 hover:text-slate-800 duration-100 transition-all ease-in-out cursor-pointer"
                      onClick={()=>setIsMenu(false)}>
                        Contact Us
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        <Link to={"/"} className="flex flex-col items-center justify-center ">
          <p className="w-13  object-cover font-semibold text-green-600 italic"
          >
            BluePrint3D
          </p>
        </Link>

        <div className="relative">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="relative flex items-center justify-center pl-2 "
            onClick={login}
          >
            {user ? (
              <img
                src={user.photoURL}
                className="w-8 min-w-[25px] h-8 min-h-[25px] drop-shadow-xl text-stone-500   hover:text-green-500 cursor-pointer rounded-full"
              />
            ) : (
              <MdAccountCircle className="w-8 min-w-[25px] h-8 min-h-[25px] drop-shadow-xl text-stone-500   hover:text-green-500 cursor-pointer" />
            )}
          </motion.div>
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-green-600 shadow-xl rounded-lg flex flex-col absolute top-8 right-0 "
            >
              {user && user.email === "dimpidimpal0@gmail.com" && (
                <Link to={"/additems"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-green-300 hover:rounded-sm transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={()=>setIsMenu(false)}>
                    Add Items <MdAdd />
                  </p>
                </Link>
              )}

              <p
                className="m-2 p-2 rounded-md shadow-lg flex items-center justify-center hover:bg-green-300 hover:rounded-sm gap-3 cursor-pointer text-textColor transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
