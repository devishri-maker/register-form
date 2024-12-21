import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
import Register from './Register/Register';
import Navbar from './Navbar/Navbar';
const App = () => {

  return (
    
             <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Register online' element={<Register online/>}></Route>

        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>

       </Routes>
       </BrowserRouter>

       
  
  )
}