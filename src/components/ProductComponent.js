import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {HiEmojiHappy} from 'react-icons/hi'

export default function ProductComponent({id,productName, price, imageSrc, stock, addRemCart, changeQuantity}) {
    
    return (
        <div className='productComponent'>
            <img className='productImg' src={imageSrc} />
            <div className='detailsDiv'>
                <p>{productName}</p>
                <p>Color</p>
                <p style={{color: "green"}}><HiEmojiHappy/>  {stock>0 ? "In Stock" : "Out Of Stock"}</p>
                <p style={{color: "grey"}}>{price} Rs</p>
            </div>
            <div className='buySection'>
                <input className='numCart' type="number" min={1} onChange={(e)=>{changeQuantity(e.target.value,id)}} defaultValue={1} id={`product${id}`}/>
                <div className='cartLogo'>
                    <AiOutlineShoppingCart/>
                </div>
                <div className='cartDiv'>
                    <input className='cartCheckbox' type='checkbox' onChange={(event)=>addRemCart(id,event)}/>
                </div>
            </div>
        </div>
    )
}
