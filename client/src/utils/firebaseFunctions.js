import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebase";

export const getAllShopItems=async()=>{
    const items =await getDocs(
      query(collection(firestore,"ShopItems"),orderBy("id","desc"))
    );
    return items.docs.map((doc)=> doc.data());
}

export const getAllServicesItems=async()=>{
  const items =await getDocs(
    query(collection(firestore,"ServicesItems"),orderBy("id","desc"))
  );
  return items.docs.map((doc)=> doc.data());
}

export const getAllBlogsItems=async()=>{
  const items =await getDocs(
    query(collection(firestore,"BlogsItems"),orderBy("id","desc"))
  );
  return items.docs.map((doc)=> doc.data());
}
  
  