import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../css/PSDstyle.css'

const PassengerDetails = () => {


  return (

<div className="container-fluid ">
    <div className='d-flex bg-white '>
        <div className='kg'>

       
        <div className="col-sm-6 text-right s">
            <div className="ticket light shadow">
                <div className="ticket-head text-center ">
                    <div className="layer"></div>
                    <div className="from-to">Hyd <ArrowForwardIcon/>  Banglore</div>
                </div>
                <div class="ticket-body">
                    <div class="passenger">
                        <p>passenger</p>
                        <h4>Sandeep</h4>
                    </div>
                    <div class="flight-info row">
                        <div class="col-xs-6">
                            <p>Bus</p>
                            <h4>No:132</h4>
                        </div>
                        <div class="col-xs-6">
                            <p>seat</p>
                            <h4>14A</h4>
                        </div>
                    </div>
                    <div class="flight-date">jun-28-2017 at 08:30am</div>
                    <div class="barcode"></div>
                </div>
                <div class="footer text-center">
            <h4>HAppy journey</h4>
                </div>
            </div>
        </div>
        
                
                   
                </div>
                
            </div></div>
        


  );
};

export default PassengerDetails;