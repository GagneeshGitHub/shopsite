import React from 'react'
import CartProduct from './CartProduct'

export default function CartList({ myCart, setTotal, total }) {
  return (
    <div className='cartList'>
      <div className='cartDetails'>
        <ul>
          <li style={{ width: "40%", paddingLeft: "10%" }}>Product</li>
          <li style={{ width: "20%" }}>Price</li>
          <li style={{ width: "20%" }}>Quantity</li>
          <li style={{ width: "20%" }}>Subtotal</li>
        </ul>
      </div>
      <hr style={{ width: "96%", marginLeft: "2%" }} />
      {myCart.length > 0 ?
        myCart.map((item) => {
          {console.log("Quantity Value Is: ", item['quantity'])}
          return <CartProduct name={item["title"]} key={item["id"]} price={item["price"]} thumbnail={item['thumbnail']} setTotal={setTotal} total={total}/>
        })
        : "No cart is added yet"
      }
    </div>
  )
}
