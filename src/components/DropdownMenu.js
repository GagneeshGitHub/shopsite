import React from 'react'
import {BiReset} from 'react-icons/bi'
 
export default function DropdownMenu({filterData,categories,brand}) {

    const filter = ()=>{
        let typeValue = document.getElementById("typeDropDown").value
        let brandValue = document.getElementById("brandDropDown").value
        filterData(typeValue,brandValue)
    }

    return (
        <div className='dropdownMenu'>
            <select className='dropdownBtn' onChange={filter} id="typeDropDown">
                <option value="blank">--TYPE--</option>
                {categories.length>0 ? 
                categories.map((item, index)=>{
                    return <option key={index} value={item}>{item}</option>
                })
                : ""}
            </select>
            <select className='dropdownBtn' onChange={filter} id="brandDropDown">
                <option value="blank">--BRAND--</option>
                {brand.length>0 ? 
                brand.map((item, index)=>{
                    return <option key={index} value={item}>{item}</option>
                })
                : ""}
            </select>
            <button className='resetBtn'><BiReset/> Reset</button>
        </div>
    )
}
