import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Cartpage from './component/Cartpage';
import Navbar from './component/Navbar';
import Allproduct from './component/Allproduct';
import Footer from './component/Footer';
import Wishlist from './component/Wishlist';
import Checkout from './component/Checkout';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Navigate to='/allproduct' replace/>}/>
         <Route path='/cartpage' element={<Cartpage/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
         <Route path='/allproduct' element={<Allproduct/>}/>
         <Route path='/Wishlist' element={<Wishlist/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
