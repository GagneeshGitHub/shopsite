import React from 'react'
import { Link } from 'react-router-dom';

export default function SearchComponent({searchProduct}) {
  const searchBtn = (code)=>{
    if(code==="Enter"){
      searchProduct(document.getElementById("searchInput").value)
      document.getElementById("searchInput").value = "";
    }
  }

  return (
    <div className='searchMenu'>
        <label className='searchLabel' htmlFor="searchInput">Search:</label>
        <input className="searchInput" type="text" onKeyDown={(e)=>searchBtn(e.code)} id="searchInput"/>
        <Link to={"checkout"}><button className='addToCartBtn'>Add To Cart</button></Link>
    </div>
  )
}
