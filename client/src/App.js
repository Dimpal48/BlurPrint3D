import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, MainContainer, CreateShopContainer, AddItems, 
CreateServices, Footer, AboutMain, ContactMain, Blog ,ShopMain,ServiceMain,WorkMain,CreateBlog} from "./Components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllShopItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/Reducer";



function App() {
  const [{ ShopItems }, dispatch] = useStateValue();

  // const[{servicesItems}, dispatch]=useStateValue();


  const fetchData = async () => {
    await getAllShopItems().then((data) => {
      dispatch({
        type: actionType.SET_SHOP_ITEMS,
        ShopItems: data,
      })
    })
  }
  useEffect(() => {
    fetchData();
  }, []);
 


  return (
    <AnimatePresence >
      <div className="w-screen h-auto flex flex-col bg-slate-300">
        <Header />
        <main className="mt-16 md:mt-24 px-7 py-10 md:px-16 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/additems" element={<AddItems />} />
            <Route path="/addshopping items" element={<CreateShopContainer />} />
            <Route path="/addservices" element={<CreateServices />} />
            <Route path="/addblogs" element={<CreateBlog />} />
            <Route path="/about" element={< AboutMain />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shopPage" element={<ShopMain/>} />
            <Route path="/services" element={<ServiceMain/>} />
            <Route path="/work" element={<WorkMain/>} />
          </Routes>
        </main>
        <Footer className="" />
      </div>
    </AnimatePresence>
  );
}

export default App;
