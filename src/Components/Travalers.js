import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import '../css/style.css'
import SeatItem1 from '../Components/SeatItem1';
import { useState } from 'react';
import SeatItem from './SeatItem';
import { Modal ,Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Travalers = () => {
    const[m1display,Changem1Display]=useState(false)
    const[bdisplay,setBdisplay]=useState(false)
   
    const[display,setDisplay]=useState(false)
  return (
   <>
<div className='rof11 border  '>
               <div className='rof11s d-flex   justify-content-between p-3'>
               <div>
               <h5 className='mb-0'>Sandy Travels</h5>
               <p className='mt-0 fw-lighter'>AC sleeper(2+1)</p>
               <div className='rating-box mx-auto mt-5   rounded d-flex'>
                      
               <div className='inner-rating border text-white  rounded rounded-end-0 rounded-start-3   bg-success '>

               <p>⭐ 3.7</p>
               </div>
               <div className='inner-rating border rounded rounded-end-3 rounded-start-0  d-flex'>
               <PersonIcon className='w-25'></PersonIcon>
                   <p className='w-100'>53.7k</p>
                   </div>
   

               </div>
               </div>
               <div className='text-center mt-auto mb-auto'>
                   <p>21 june</p>
                   <h1 className='mt-0'>16:00</h1>
                   <p>Nellore</p>
               </div>
               <div className='border mt-auto mb-auto'>
                       <a href='#' className='nav-link'>09:00 Hrs</a>
                       
               </div>
               <div className='text-center mt-auto mb-auto'>
                   <p>21 june</p>
                   <h1>16:00</h1>
                   <p>Nellore</p>
                  
               </div>
                </div>

           <div className='rof11s2 border '>
            <p className='text-danger ms-3  '>Save min ₹200 with Flash Offer!</p>
           </div>
           </div>
           
           <div className='rof22  p-3 border'>
             
               <p className='mb-0'> Starting at</p>
               <s><p className='mb-0'> $1500</p></s>
               <h4 className='mb-0'>$ 1300</h4>
               <h6 className='text-success'>Save $200</h6>
               <div className='me-5 mt-4'>
               <button onClick={()=>Changem1Display(!m1display)} className='rounded bg-danger text-white mx-auto'>Show seats</button>
               <p className=' seatsfont'>9 seats available  </p>

               </div>
              
          
           
           </div>




           
        <Modal  open={m1display} onClose={()=>Changem1Display(false)}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        height:600,
        transform: 'translate(-50%, -50%)',
        width: 720,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        borderRadius:3,
        padding:0,
        p: 4,
      }}>
       <p>Upper</p>

       <div className="outer-box d-flex">

        <div className="upper d-flex">

         <div className="upper-left d-flex flex-wrap">
          <SeatItem1 number1={50}></SeatItem1>
          <SeatItem1 number1={48}></SeatItem1>
          <SeatItem1 number1={46}></SeatItem1>
          <SeatItem1 number1={44}></SeatItem1>
          <SeatItem1 number1={42}></SeatItem1>
         </div>
  
         <div className="upper-left d-flex flex-wrap">
          <SeatItem1 number1={49}></SeatItem1>
          <SeatItem1 number1={47}></SeatItem1>
          <SeatItem1 number1={45}></SeatItem1>
          <SeatItem1 number1={43}></SeatItem1>
          <SeatItem1 number1={41}></SeatItem1>
         </div>
        </div>




     <p className="para1">Lower</p>
     
    <div className="box-modal d-flex">
   
   <div className="left1 d-flex flex-wrap">
    
      <SeatItem  number={40}/>
        <SeatItem number={39}/>
        <SeatItem number={36}/>
        <SeatItem number={35}/>
        <SeatItem number={32}/>
        <SeatItem number={31}/>
        <SeatItem number={28}/>
        <SeatItem number={27}/>
        <SeatItem number={24}/>
        <SeatItem number={23}/>
        <SeatItem number={20}/>
        <SeatItem number={19}/>
        <SeatItem number={16}/>
        <SeatItem number={15}/>
        <SeatItem number={12}/>
        <SeatItem number={11}/>
        <SeatItem number={8}/>
        <SeatItem number={7}/>
        <SeatItem number={4}/>
        <SeatItem number={3}/>
   </div>

   <div className="left1 d-flex flex-wrap">
    
    <SeatItem  number={38}/>
         <SeatItem number={37}/>
         <SeatItem number={34}/>
         <SeatItem number={33}/>
         <SeatItem number={30}/>
         <SeatItem number={29}/>
         <SeatItem number={26}/>
         <SeatItem number={25}/>
         <SeatItem number={22}/>
         <SeatItem number={21}/>
         <SeatItem number={18}/>
         <SeatItem number={17}/>
         <SeatItem number={14}/>
         <SeatItem number={13}/>
         <SeatItem number={10}/>
         <SeatItem number={9}/>
         <SeatItem number={6}/>
         <SeatItem number={5}/>
         <SeatItem number={2}/>
         <SeatItem number={1}/>
         
    </div>
   
    
    </div>
    
    </div>
    <Link to="/Payment" ><button  className={bdisplay?"btn1-selected":"btn1"}>Book Ticket</button></Link>
      </Box>
      
     </Modal>

          
           </>

  )
}

export default Travalers