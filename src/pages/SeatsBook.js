import React, { useState } from 'react'
import SeatItem from '../Components/SeatItem'
import '../css/bookstyle.css'

import { Box, Modal, styled } from '@mui/material'
import { ModalBody } from 'react-bootstrap'
import SeatItem1 from '../Components/SeatItem1'


const SeatsBook = () => {
   
  const[bdisplay,setBdisplay]=useState(false)
  const[m1display,Changem1Display]=useState(false)
  const[display,setDisplay]=useState(false)


  localStorage.getItem("seat-number");

  return (<div>
      
      

      <button onClick={()=>Changem1Display(!m1display)}>Show Tickets</button>
      
     <Modal  open={m1display} onClose={()=>Changem1Display(false)}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        height:650,
        transform: 'translate(-50%, -50%)',
        width: 700,
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
          <SeatItem1></SeatItem1>
          <SeatItem1></SeatItem1>
          <SeatItem1></SeatItem1>
          <SeatItem1></SeatItem1>
          <SeatItem1 number={41}></SeatItem1>
         </div>
  
         <div className="upper-left d-flex flex-wrap">
          <SeatItem1></SeatItem1>
          <SeatItem1></SeatItem1>
          <SeatItem1></SeatItem1>
          <SeatItem1></SeatItem1>
          <SeatItem1></SeatItem1>
         </div>
        </div>






    <div className="box-modal d-flex">
    <p>Lower</p>
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
    <button  className={bdisplay?"btn1-selected":"btn1"}>Book Ticket</button>
      </Box>
      
     </Modal>

    
    
   
    
    </div>
    
  )
}

export default SeatsBook