import React, { useState } from 'react'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default function CartCheckout({ myCart, setCart }) {

  const [total, setTotal] = useState(()=>{
    let sum = 0
    myCart.map((item)=>{
      sum = sum + (item["price"]*item['quantity'])
    })
    return sum
  })

  return (
    <div className='checkoutSection'>
      <CartList myCart={myCart} setTotal={setTotal} total={total} />
      <CartTotals total={total} />
    </div>
  )
}
