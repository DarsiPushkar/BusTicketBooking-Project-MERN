import React from 'react'
import logo from './images/logo.png'
import offer from './images/offer.png'
import tic from './images/ticket.png'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonIcon from '@mui/icons-material/Person';
import './App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import googlelogo from './images/googlelogo.png'
import { Box, Modal } from '@mui/material';
import axios from 'axios';
import { DataArray } from '@mui/icons-material';



function Header() {


    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };
    const [mdisplay,Changemdisplay]= useState(false)
    const [msdisplay,Changemsdisplay]= useState(false)

  const [username,setUsername]=useState(null)
  const [phone,setPhone]=useState(null)
  const [password,setPassword]=useState(null)

  const Signup=async()=>{
    const data=new FormData();
    data.append("username",username);
    data.append("phone",phone);
    data.append("password",password);
    const response=await axios.get("http://localhost:3008/signup?username="+username+"&phone="+phone+"&password="+password,data)
    if(response){
      console.log(response)
      if(response.data.status==="success"){
       
      }
      else{
        
      }
    }
    
  }

  const Login=async()=>{
    const data=new FormData();
    data.append("phone",phone);
    data.append("password",password);
    const response=await axios.get("http://localhost:3008/login?phone="+phone+"&password="+password,data)
    if(response){
      console.log(response)
    }
  }

  Login()


  return (<div>    <div className='border shadow'>
        <div className='container'>
            <div className='navbar p-4'>
                <div className='d-flex'><Link to="/"><img src={logo} height="30px" ></img></Link>
                <div className='d-flex text-danger hovering ms-5'>
              <DirectionsBusIcon></DirectionsBusIcon>
                    <div>
                        <Link to="/" className='nav-link'><h5>Buses</h5></Link>
                    </div>
                </div>
                </div>
                <div className='d-flex'>
                <div className='d-flex me-5 hovering'>
              <img src={offer} height="30px"></img>
                    <div>
                        <Link to="/Offer" className='nav-link ' ><h6 className='mt-1'>Offer</h6></Link>
                    </div>
                </div>
                <div className='d-flex me-5 hovering'>
              <img src={tic} height="30px"></img>
                    <div>
                        <h6 className='mt-1'>Track Ticket</h6>
                    </div>
                </div>
                <div className='d-flex text-danger me-5 hovering'>
              <PersonIcon></PersonIcon>
              
                  
                      
    <Link className='nav-link' onClick={()=>Changemdisplay(!false)}> <h6 className='mt-1 me-3'>Login</h6></Link></div>
    <div className="d-flex text-danger hovering">
    <PersonIcon></PersonIcon>
    <Link className='nav-link' onClick={()=>Changemsdisplay(!false)}> <h6 className='mt-1'>SignUp</h6></Link>
                    </div>
                
            </div>
        </div>
        </div>
    </div>

 <Modal  open={mdisplay} onClose={()=>Changemdisplay(false)}>


    <Box className="rounded" sx={style}>
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
         <img className='logimg ' src='https://static.abhibus.com/web/media/branding/Login.svg'></img>
         </div>

        </div>
        <div className='inner-right ms-3 ' closeButton>  
            <h5 className='mt-2 ' >Login to APMS Bus</h5> 
           
              <p className='mb-0 fw-lighter'>Enter phone number to continue</p>
              <input onChange={(event)=>setPhone(event.target.value)} className='in rounded form-control mb-2' name="phonenumber" placeholder='+91|' type='number' required></input>
             
              <p className='mb-0 fw-lighter'>Enter password</p>
              <input onChange={(event)=>setPassword(event.target.value)} className='in rounded form-control' name="password" placeholder='password' type='password' required></input>

              <button onClick={()=>{Login()}} className='bg-danger text-white rounded form-control mt-4 mb-3'>Login</button>
             <div className='d-flex'>
              <p>Create an Account</p>
              <Link className='nav-link ms-2' onClick={()=>Changemsdisplay(!false)}> <a className="nav-link text-danger">Signup</a> </Link>
              </div>
              <p className='text-center mt-5 '>or Continue With</p>
              <div className='d-flex justify-content-center border rounded pt-2 w-75 ms-5'>
                <img className='gimg ' src={googlelogo}></img>
                <div>
                  <p className='text-center '>sign in with Google</p>
                </div>
              </div>
            <p className='text-center mt-4  fw-lighter'>By logging in, I understand & agree to AbhiBus
terms of use
  &  
privacy policy</p>
        </div>
        </div>

    </Box>
 </Modal>






 <Modal  open={msdisplay} onClose={()=>Changemsdisplay(false)}>


    <Box className="rounded" sx={style}>
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
         <img className='logimg ' src='https://static.abhibus.com/web/media/branding/Login.svg'></img>
         </div>

        </div>
        <div className='inner-right ms-3 ' closeButton>  
            <h5 className='mt-2 ' >SignUp to APMS Bus</h5> 



            <p className='mb-0 fw-lighter '>Enter Username</p>
              <input onChange={(event)=>setUsername(event.target.value)} className='in rounded form-control mb-2' name="phonenumber" placeholder='username' type='username' required></input>
           
              <p className='mb-0 fw-lighter '>Enter phone number</p>
              <input onChange={(event)=>setPhone(event.target.value)} className='in rounded form-control mb-2' name="phonenumber" placeholder='+91|' type='number' required></input>
             
              <p className='mb-0 fw-lighter'>Enter password</p>
              <input onChange={(event)=>setPassword(event.target.value)} className='in rounded form-control' name="password" placeholder='Enter password' type='password' required></input>
              
              
              
              <button onClick={()=>Signup()} className='bg-danger text-white rounded form-control mt-4'>SignUp</button>

              <div className='d-flex text-center'>
              <p>Already have an account?</p>
              <Link className='nav-link ms-2' onClick={()=>Changemdisplay(!false)}> <a className="nav-link text-danger">Login</a> </Link>
              </div>

              <p className='text-center mt-5 '>or Continue With</p>
              <div className='d-flex justify-content-center border rounded pt-2 w-75 ms-5'>
                <img className='gimg ' src={googlelogo}></img>
                <div>
                  <p className='text-center '>sign in with Google</p>
                </div>
              </div>
            <p className='text-center mt-4  fw-lighter'>By signing in, I understand & agree to AbhiBus
terms of use
  &  
privacy policy</p>
        </div>
        </div>
      



    </Box>
 </Modal>

    </div>

  )
}

export default Header