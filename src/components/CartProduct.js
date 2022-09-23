import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

export default function CartProduct({ name, thumbnail, price, setTotal,total }) {

    const [quantity, setQuantity] = useState(1)

    const [subTotal,setSubTotal] = useState(quantity*price)

    // Add or rem quantity
    const alterQuantity = (value)=>{
        console.log("Initial Value Of Quantity Is: ", value)
        let previousSubTotal = subTotal
        if(quantity==1 && value ==-1){
            return
        }

        let newQuantity = quantity+value
        let newSubTotal = newQuantity*price
        let cartValue = total + (newSubTotal - previousSubTotal)
        setQuantity(newQuantity)
        setSubTotal(newSubTotal)
        setTotal(cartValue)
        console.log("Value Of Total: ", total)
        console.log("Value of quantity and subtotal", quantity, subTotal)
    }

    return (
        <>
            <div className='cartProduct'>
                <div style={{ width: "40%", display: "flex" }}>
                    <img src={thumbnail} style={{ width: "80px", height: "80px", marginTop: "10px", marginLeft: "10px" }} />
                    <p style={{ marginTop: "50px", transform: "translateY(-50%)", marginLeft: "10px" }}>{name}</p>
                </div>
                <p style={{ width: "20%", marginLeft: "70px" }}>{price} Rs.</p>
                <div style={{width: "20%", display: "flex"}}>
                    <button onClick={()=>alterQuantity(-1)} className="alterButtons">-</button>
                    <p>{quantity}</p>
                    <button onClick={()=>alterQuantity(1)} className="alterButtons">+</button>
                </div>
                <p>
                    {subTotal}
                </p>
            </div>
            <hr style={{ width: "96%", marginLeft: "2%" }} />
        </>
    )
}
