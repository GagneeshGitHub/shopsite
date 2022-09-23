import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotals({ total }) {
  return (
    <div className='cartTotals'>
      <p style={{ fontSize: "30px", marginLeft: "10px" }}>Cart Totals</p>
      <div style={{display: "flex"}}>
        <p style={{ marginLeft: "10px", marginRight: "250px"}}>Subtotal</p><p>{total} Rs.</p>
      </div>
      <hr style={{ width: "90%", marginLeft: "5%" }} />
      <div style={{display: "flex"}}>
        <p style={{ marginLeft: "10px", marginRight: "250px", fontSize: "20px"}}>Total</p><p style={{color: "blue"}}>{total} Rs.</p>
      </div>
      <Link to="/thankyou"><button style={{color: "white", border: "0px",marginLeft: "10%",width: "80%", height: "50px", backgroundColor: "blue", borderRadius: "20px"}}>PROCEED TO CHECKOUT</button></Link>
    </div>
  )
}
