import React from 'react'
import '../css/bookstyle.css'
import { useState } from 'react'

const SeatItem1 = ({number1,Booked}) => {
  const [display1,setDisplay1]=useState(false)

  const StoreNo1=async()=>{
      localStorage.setItem1("seat-number",number1)
  }

  return (
    <div>
      
      
      <div className={display1?"shape shape-selected rounded-2 border-1 border-secondary-subtle" :"shape rounded-2 border-1 border-secondary-subtle"} onClick={()=>{setDisplay1(!display1);}}>{number1}
        <div className="inner-shape rounded-1 border-1 border-secondary-subtle"></div>
      </div>

     
    
    </div>
  )
}

export default SeatItem1