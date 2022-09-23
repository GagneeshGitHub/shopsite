import React from 'react'
import ProductAttributes from './ProductAttributes'
import ProductComponent from './ProductComponent'


export default function Body({fetchedData, addRemCart, changeQuantity}) {
  return (
    <div>
      <ProductAttributes/>
      {fetchedData.map((eachData)=>{
        return <ProductComponent key={eachData['id']} id={eachData['id']} productName={eachData["title"]} price={eachData["price"]} imageSrc={eachData["images"][0]} stock={eachData["stock"]} addRemCart={addRemCart} changeQuantity={changeQuantity}/>
      })}
    </div>
  )
}
