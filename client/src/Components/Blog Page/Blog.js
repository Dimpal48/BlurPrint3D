import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { storage, firestore } from "../../firebase";



function Blog() {
  const [postBlogs, setBlogList] = useState([]);

  const fetchBlogItems = async () => {
    const myCollection = collection(firestore, "blogItems");
    const querySnapshot = await getDocs(myCollection);

    const items = querySnapshot.docs.map((doc) => doc.data());
    setBlogList(items);
    console.log(items);
  };
  useEffect(() => {
    fetchBlogItems();
  }, [])


  // const deletePost = async (id) => {
  //   const postDoc = doc(firestore, "blogItems", id);
  //   await deleteDoc(postDoc);
  // };


  return (
    <div className='container-fluid pb-4 pt-5 w-full min-h-[100vh-80px] h-auto flex flex-col '>
      {postBlogs.map((item) => {
        console.log(item.title);
        <>
       <h1>{item.title}</h1> 
       <h1>{item.title}</h1> 
       <h1>{item.title}</h1> 
       <h1>{item.title}</h1> 
       <h1>{item.title}</h1> 
       </>
      })}
    </div>
  )
}

export default Blog
