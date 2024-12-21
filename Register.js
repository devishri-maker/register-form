import React, {  useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuid} from 'uuid';
import './Register.css'
const Register = () => {
const[userinfo,setUserinfo]=useState([
    {
        id:"",
        name:"",
        email:"",
        Dish:"",
        contact:"",
        Address:""
    }
])

useEffect(()=>
{
   setUserinfo(()=>
{
    return{...setUserinfo,id:uuid()}
})
},[])

const handleChange=(event)=>
{
   const{name,value}=event.target;
   setUserinfo((currInfo)=>
{
    return{
        ...currInfo,
        [name]:value
    }
})
}
const handleClick=()=>
{
    alert('Ordered successfully');
    console.log(userinfo);
    setUserinfo({
        id:uuid(),
        name:"",
        email:"",
        contact:"",
        Dish:"",
        Address:"",
    })
}

  return (
    <div className='home'>
        <div className='home-container'>
          <div className='form-container'>
              <h1 className='home-title'>Book Order</h1>

              <input title="id" placeholder='Enter the user id ' disabled value={userinfo.id} onChange={handleChange}/><br/>
               
              <input type='text' name='name' placeholder='Enter your Name:'
               value={userinfo.name} onChange={handleChange}/><br/>

              <input type='text' name='email' placeholder='Enter your Emai::'
              value={userinfo.email} onChange={handleChange}/><br/>

               <input type='text' name='phone' placeholder='Enter your Phone:'
               value={userinfo.contact} onChange={handleChange}/><br/>


               <input type='text' name='age' placeholder='enter your Dish:'
                value={userinfo.age} onChange={handleChange}/><br/>

              <input type='text' name='jobRole' placeholder='Enter your Address:'
              value={userinfo.jobrole} onChange={handleChange}/><br/>

         <button type='button' className='btn btn-success'onClick={handleClick}>Place Order</button>
 





          </div>
        </div>
    </div>
  )
}