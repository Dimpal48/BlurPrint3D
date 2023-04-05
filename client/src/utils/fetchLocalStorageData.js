

export const fetchUser=()=>{
    const userInfo=
    localStorage.getItem("user")!=="undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();

 return userInfo;
}

export const fetchShopData=()=>{
    const dataInfo=
    localStorage.getItem("ShopItems")!=="undefined"
    ? JSON.parse(localStorage.getItem("ShopItems"))
    : localStorage.clear();

 return dataInfo ? dataInfo : [];
}

export const fetchServicesData=()=>{
  const serviceInfo=
  localStorage.getItem("ServicesItems")!=="undefined"
  ? JSON.parse(localStorage.getItem("ServicesItems"))
  : localStorage.clear();

return serviceInfo? serviceInfo : [];
}

export const fetchCart = () => {
    const cartInfo =
      localStorage.getItem("cartItems") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.clear();
  
    return cartInfo ? cartInfo : [];
  };