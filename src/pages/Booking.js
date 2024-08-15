import React from 'react'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import PersonIcon from '@mui/icons-material/Person';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HotelIcon from '@mui/icons-material/Hotel';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import LightModeIcon from '@mui/icons-material/LightMode';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SeatItem from '../Components/SeatItem';
import SeatItem1 from '../Components/SeatItem1';
import { useState } from 'react';
import { Box, Modal, styled } from '@mui/material'
import Travalers from '../Components/Travalers';





const Booking = () => {
    const[bdisplay,setBdisplay]=useState(false)
   
    const[display,setDisplay]=useState(false)
  
  return (
    <div>   
        <SearchBar></SearchBar>
         <div className='wbg'>
<div className='w-75 mx-auto'>


    <div className='container1 container d-flex   shadow'>
        <h3>Sort By :</h3>
        <a className='nav-link'  href='#'>Prices</a>
        <a className='nav-link'  href='#'>Prices</a>
        <a className='nav-link'  href='#'>Prices</a>
        <a className='nav-link'  href='#'>Prices</a>
        <a className='nav-link'  href='#'>Prices</a>  <a className='nav-link'  href='#'>Prices</a>
       <b><a>Showing 206 Buses on this route</a></b>

       </div>
       
       <div className='book-category mt-3 d-flex '>
        <div className='book-left p-4'>
        <p className='mb-0'>Filters</p>
        <hr className='mt-1'></hr>
        <div className='cbox d-flex align-iten-center border p-2 rounded justify-content-between'>
        <a href='#' className='nav-link'>Pricedrop</a>
        <input type='checkbox' ></input>
        </div>
        <div className='cbox mt-2 align-iten-center border p-2 rounded justify-content-between'>
        <a href='#' className='nav-link'>Pricedrop</a>
        <div className='d-flex justify-content-around p-2'>
           
        <button  className='bbox rounded  w-25 p-1' >  <AcUnitIcon></AcUnitIcon>AC </button>
        <button className='bbox rounded p-1 ' ><AcUnitIcon></AcUnitIcon><br></br> Non-AC </button>
        </div>
        <div className='d-flex justify-content-around p-2'>
        <button className='bbox rounded p-1 ' > <HotelIcon></HotelIcon><br></br> Sleeper</button>
        <button className='bbox rounded ' ><AirlineSeatReclineExtraIcon></AirlineSeatReclineExtraIcon><br></br> Seating </button>
        </div>
        </div>
        <div className='cbox mt-2 align-iten-center border p-2 rounded justify-content-between'>
        <a href='#' className='nav-link'>Departure Time</a>
        <div className='d-flex justify-content-around p-2'>
        <button className='bbox rounded   p-1' ><LightModeIcon></LightModeIcon> <br></br> before 10am</button>
        <button className='bbox rounded p-1  ' > <LightModeIcon/><br></br>10am - 5pm </button>
        </div>
        <div className='d-flex justify-content-around p-2'>
        <button className='bbox rounded p-1 ' ><FilterDramaIcon></FilterDramaIcon> <br></br>5pm - 11pm</button>
        <button className='bbox rounded p-1' > <BedtimeIcon></BedtimeIcon> <br></br>before 10am </button>
        </div>
        </div>
        
        </div>
        <div className='book-right ms-3  rounded'>
           <div className='right-offer d-flex overflow-x-scroll '>
            <img  src='https://static.abhibus.com/offerbanners/Apr2024/30/1714476340/OrangefcTravels.png'></img>
            <img  src='https://static.abhibus.com/img/assured_partner/assured-filter-banner-new.png'></img>
            <img  src='https://static.abhibus.com/img/cards/2022/ratings.png'></img>
            <img  src='https://static.abhibus.com/img/EDGE_EFD.webp'></img>
            <img  src='https://static.abhibus.com/img/EDGE_ERH.webp'></img>
            <img  src='https://static.abhibus.com/img/EDGE_ERH.webp'></img>
            <img  src='https://static.abhibus.com/img/cards/2022/offers.png'></img>
           </div>
         
           <div className='right-offer1  rounded mt-3 d-flex justify-content-around '>
            <div className='rof1'>
                <img className='w-75 h-70' src='https://static.abhibus.com/img/TSRTC_LOGO.png'></img>
            </div>
            <div className='rof2 mx-auto pt-3 '>
              <h1>APSRTC</h1>
              <p>(Andhra Pradesh State Road Transport Corporation)</p>
            </div>
            <div className='rof3 '>
              <div className=' mt-3 w-75 mx-auto  rounded d-flex'>
                       
                       <div className='inner-rating border text-white  rounded rounded-end-0 rounded-start-3   bg-success '>
       
                       <p>⭐ 3.7</p>
                       </div>
                       <div className='inner-rating border rounded rounded-end-3 rounded-start-0  d-flex'>
                       <PersonIcon className='w-25'></PersonIcon>
                           <p className='w-100'>53.7k</p>
                           </div>
           
       
                      </div>
                      <div className='pricebox bg-white h-25 mt-3 border rounded  mx-auto  '> 
                        <p className='w-100 mb-0 ms-4'>@1001 <br></br>onwords</p><br></br>
                       
                      </div>
                      </div>
           </div>

       


           <div className='right-offer2  rounded  mt-3 d-flex '>
           
            <Travalers></Travalers>
       
          </div>
    

            </div> 

       </div>
      
        

    </div>

        
        </div>









        </div>
 )
}

export default Booking