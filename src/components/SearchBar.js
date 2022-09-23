import React from 'react'
import DropdownMenu from './DropdownMenu'
import SearchComponent from './SearchComponent'

export default function SearchBar({filterData,categories,brand,searchProduct}) {
  return (
    <div className='searchBar'>
      <DropdownMenu filterData={filterData} categories={categories} brand={brand}/>
      <SearchComponent searchProduct={searchProduct}/>
    </div>
  )
}
