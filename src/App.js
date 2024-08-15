import logo from './logo.svg';
import { BrowserRouter, Route, Router,Routes } from "react-router-dom";
import './App.css';
import Trackticket from './pages/Trackticket';
import Signmo from './pages/Signmo';
import Booking from './pages/Booking';
import Offers1 from './pages/Offers1';
import Footer from './Footer';
import Header from './Header';
import Body from './Body'
import Accountdetails from './pages/Accountdetails';
import Payment from './pages/Payment';
import SeatsBook from './pages/SeatsBook';
import PassengerDetails from './pages/PassengerDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route  path="/"  element={<Body></Body>}></Route>
      <Route path='/modal' element={<Signmo></Signmo>}  ></Route>
      <Route path='/Booking' element={<Booking/>} ></Route>
      <Route path='/Offer' element={<Offers1></Offers1>} ></Route>
      <Route path='/Account' element={<Accountdetails></Accountdetails>} ></Route>
      <Route path='/Payment' element={<Payment></Payment>}  ></Route>
      <Route path='/SeatsBook' element={<SeatsBook></SeatsBook>} ></Route>
      <Route path='/Passangerdetails' element={<PassengerDetails></PassengerDetails>} ></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
