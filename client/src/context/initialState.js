import {  fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
    ShopItems: null,
  //   cartShow: false,
  //   cartItems: cartInfo,
  };