import { useEffect, useState } from 'react';
import Body from './Body';
import SearchBar from './SearchBar'

function MainPage({myCart,setCart}) {

  const [categories, setCategories] = useState([])

  const [brand, setBrands] = useState([])

  const [fetchedData, setFetchedData] = useState([])

  const [filteredData, setFilterData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products').then(response => response.json()).then(data => {
      setFetchedData(data['products']);
      setFilterData(data['products']);
    })
  }, []);

  const searchProduct = (productName) => {
    fetch(`https://dummyjson.com/products/search?q=${productName}`)
      .then(response => response.json())
      .then(data => {
        let temBrand = []
        data['products'].map((item) => {
          if (!temBrand.includes(item['brand'])) {
            temBrand.push(item['brand'])
          }
        })
        setBrands(temBrand)
        console.log("List of brands are: ", temBrand);
        var tempCategories = []
        data['products'].map((item) => {
          if (!tempCategories.includes(item['category'])) {
            tempCategories.push(item['category'])
          }
        })
        setCategories(tempCategories)
        console.log("List of categories are: ", tempCategories);
        setFetchedData(data['products'])
        setFilterData(data['products'])
      })
  }

  //Filtered Data
  const filterData = (typeValue, brandValue) => {
    console.log("We are inside the fildetData");

    if (typeValue !== 'blank' && brandValue === 'blank') {
      let fidata = filteredData.filter(item => item['category'] === typeValue)
      setFilterData(fidata)
    } else if (typeValue === 'blank' && brandValue !== 'blank') {
      let fidata = filteredData.filter(item => item["brand"] === brandValue)
      setFilterData(fidata)
    } else if (typeValue !== 'blank' && brandValue !== "blank") {
      let fidata = filteredData.filter(item => (item['brand'] === brandValue && item['category'] === typeValue) ? true : false)
      setFilterData(fidata)
    } else {
      setFilterData(fetchedData)
    }
  }

  //Add or remve cart
  const addRemCart = (id, event) => {

    if (event.target.checked) {
      let cart = filteredData.filter((item) => item.id === id)[0]
      cart = {...cart, ...{"quantity": 1}}
      setCart([...myCart, cart])
      console.log("First index value is: ", myCart[0])
    }
    else {
      console.log("Type of myCart is: ",typeof(myCart))
      myCart.filter((item)=>item.id!==id)
      console.log("Else function of my cart is called")
    }
  }

  //Change quantity
  const changeQuantity = (id, quantity)=>{
    let cart = filteredData.filter((item)=>item.id === id)[0]
    cart = {...cart, ...{"quantity": quantity}}
    console.log("Type of my cart is: ",typeof(myCart))
    myCart.filter((item)=>item.id!==id)
    setCart([...myCart, cart])
  }

  return (
    <>
      <SearchBar filterData={filterData} categories={categories} brand={brand} searchProduct={searchProduct} changeQuantity={changeQuantity}/>
      <Body fetchedData={filteredData} addRemCart={addRemCart} changeQuantity={changeQuantity}/>
    </>
  );
}

export default MainPage;
