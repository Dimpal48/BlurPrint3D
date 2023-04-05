import {  fetchUser,fetchShopData, fetchServicesData } from "../utils/fetchLocalStorageData";


const userInfo = fetchUser();
const dataInfo=fetchShopData();
const serviceInfo= fetchServicesData();

export const initialState = {
    user: userInfo,
    ShopItems: dataInfo,
    ServicesItems :serviceInfo,
    cartShow: false,
  //   cartItems: cartInfo,
  };