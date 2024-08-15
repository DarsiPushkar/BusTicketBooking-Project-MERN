import React from 'react'
import '../css/bookstyle.css'
import { useState } from 'react'

const SeatItem = ({number,Booked}) => {
  const [display,setDisplay]=useState(false)

  const StoreNo=async()=>{
      localStorage.setItem("seat-number",number)
  }

  return (
    <div>
      
      
      <div className={display?"shape1 shape1-selected rounded-2 border-1 border-secondary-subtle" :"shape1 rounded-2 border-1 border-secondary-subtle"} onClick={()=>{setDisplay(!display);}}>{number}
        <div className="inner-shape1 rounded-1 border-1 border-secondary-subtle"></div>
      </div>

     
    
    </div>
  )
}

export default SeatItem