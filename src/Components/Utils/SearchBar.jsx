import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='SearchBar'>
      <input type="text" placeholder="Search for products, brands and more" />
      <button><SearchIcon className='SearchButtonImg' /></button>
    </div>
  )
}

export default SearchBar
