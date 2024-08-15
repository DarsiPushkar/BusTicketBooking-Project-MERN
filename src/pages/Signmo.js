import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import googlelogo from '../images/googlelogo.png'
import CloseButton from 'react-bootstrap/esm/CloseButton';
import logo from '../images/titlelogo.png'

const Signmo = () => {

    const [mdisplay,Changemdisplay]= useState(false)
  return (<div>
    <div>modal</div>
    <button  onClick={()=>Changemdisplay(!false)}> submit </button>

    
<Modal className='m-body'  id="modal" show={mdisplay} onHide={()=>Changemdisplay(false)} >
 

  
    <Modal.Body  ClassName=" mb p-0   bg-white   rounded-3 w-100 "  >
   
      <div className='category-sign' >
      <div className='inner-left'>
        <div className='logoimg mx-auto'>  <img className='w-100'  src={logo} ></img></div>
      
         <div className='mt-1 mb-0'>
        <ul>
          <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
         <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
         <li><b>APMS Assured</b>
         <p><small> Protect yourself with upto 150% refund incase of service cancellation </small></p></li>
        </ul>

         </div>
         <div className='mt-0'>
         <img className='img ' src='https://static.abhibus.com/web/media/branding/Login.svg'></img>
         </div>

        </div>
        <div className='inner-right ms-3 ' closeButton>  
            <h5 className='mt-2 ' >Login to APMS Bus</h5> 
            <form>
              <p className='mb-0 fw-lighter'>Enter number to Continue</p>
              <input className='in rounded form-control ' placeholder='+91|' type='telno'></input>
             
              <p className='mb-0 mt-4 fw-lighter'>Get First Ride Free</p>
              <input className='in rounded form-control' type='text' placeholder='Enter referal Code if Available'></input>
              <button className='bg-danger text-white rounded form-control mt-4'>Login</button>
              </form>
              <p className='text-center mt-5 '>or Continue With</p>
              <div className='d-flex justify-content-center border rounded pt-2 w-75 ms-4'>
                <img className='gimg ' src={googlelogo}></img>
                <div>
                  <p className='text-center '>sign in with Google</p>
                </div>
              </div>
            <p className='text-center mt-4  fw-lighter'>By logging in, I understand & agree to APMSBus
terms of use
  &  
privacy policy</p>
        </div>
        </div>
      
    </Modal.Body> 
</Modal>
    </div>)
}

export default Signmo