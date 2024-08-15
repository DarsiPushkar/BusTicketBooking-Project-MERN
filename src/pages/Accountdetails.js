import React from 'react'
import { Link } from 'react-router-dom'

const Accountdetails = () => {
  return (
    <div className='cb'>
    <div className='Bar align-items-center d-flex text-white '>
        <div className='inner-Bar d-flex '>
        <Link className='nav-link' to="/"><p>Home</p></Link>
        <Link className='nav-link' to="/"><p>/</p></Link>
        <Link className='nav-link' to="/"><p>My Profile</p></Link>
        </div>
    </div>
    <div className='detailsbox  mx-auto '>
        <div className=' p-3  w-100 mb-0'> 
            <h4 className='mb-0' >Profileinfo</h4>
             </div>
        <div className='d-flex mt-0'>
        <div className='w-50 p-3 mt-0 '>
       
        <p className='mb-0'>Name</p>
        <input type='text' className=' btn-bg-smoke  form-control' ></input>
        <p className='mb-0 mt-3'>Gender</p>
        <input type='Gender' className=' btn-bg-smoke  form-control ' ></input>
        <p className='mb-0 mt-3'>DOB</p>
        <input type='dob' className=' btn-bg-smoke  form-control ' ></input>
        </div>
        <div className='p-3 w-50  '>
       
        <p className='mb-0'>gmail</p>
        <input type='gmail' className=' btn-bg-smoke  form-control' ></input>
        <p className='mb-0 mt-3'>Mobile Number</p>
        <input type='tel' className=' form-control btn-bg-smoke ' ></input>
        </div>
    </div>
    <div className='btn-save p-3 mx-auto '>
        <button className='bg-danger w-100 h-100 rounded text-white'> Save</button>
    </div>
    </div>



    </div>
  )
}

export default Accountdetails