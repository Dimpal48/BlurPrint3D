import React from 'react'
import { Link } from 'react-router-dom'

function AddItems() {
  return (
    <div className='flex flex-col gap-8'>
        <Link to={"/addshopping items"}>
           AddShopping Items
        </Link>
        <Link to={"/addservices"}>
           AddServices
        </Link>
        <Link to={"/addblogs"}>
           Create Blogs
        </Link>
    </div>
  )
}

export default AddItems