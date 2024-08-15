import React from 'react'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <>
        <div className='searchbar'><div className='searchbarin container  b shadow pe-5'>
            <div  className='container d-flex'>
                <div className='p-2 col-3 boder d-flex rounded 2 bg-light'>
                  
          <div><input className='btn' type='text' placeholder='From station'></input></div>
        </div>
        <button className='btn btn-secondary p-2 ms-3'><SwapHorizIcon /></button>
        <div className='p-2 col-3 boder d-flex ms-5 rounded 2 bg-light'>
                    <LocationOnIcon className='mt-2' />
          <div><input className='btn ' type='text' placeholder='To Station'></input></div>
        </div>
        <div className='p-2 col-4 boder d-flex rounded 2 bg-light ms-2 justify-content-around'>
          <div><input className='btn hovering' type='date'></input></div>
          <button className='btn btn-secondary'>Today</button>
          <button className='btn btn-secondary ms-1 me-4'>Tomorrow</button>
        </div>
        <Link to="/Booking" ><button className='btn btn-danger ms-5 ps-5 pe-5 mt-1 '><h5>Search</h5></button></Link>
        </div>
        </div>
        </div>

    </>
  )
}

export default SearchBar