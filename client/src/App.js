import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, MainContainer,CreateShopContainer,AddItems,CreateServices } from "./Components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllShopItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/Reducer";


function App() {
  const[{ShopItems},dispatch]=useStateValue();

  const fetchData=async()=>{
    await getAllShopItems().then((data)=>{
      dispatch({
        type : actionType.SET_SHOP_ITEMS,
        ShopItems :data,
      })
    })
  }
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <AnimatePresence >
      <div className="w-screen h-auto flex flex-col bg-slate-300">
      <Header />
        <main className="mt-16 md:mt-24 px-7 py-10 md:px-16 w-full">
          <Routes>
            <Route path="/" element={<MainContainer/>} />         
            <Route path="/additems" element={<AddItems/>} />
            <Route path="/addshopping items" element={<CreateShopContainer/>} />
            <Route path="/addservices" element={<CreateServices/>} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
