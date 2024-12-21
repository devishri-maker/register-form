import React from 'react'
import "./About.css"
const About = () => {
  return (
    <>
    <div className='about'>
      <h2 className='shop'>ABOUT SHOWROOM</h2><br/>
      < p className='para'> Ibaco is dedicated to conjuring up a delightful, unique ice cream eating experience.<br></br> One based on the scoop 'n' serve format. With 36 flavours inspired from exotic places around the world,<br></br> Ibaco aims to offer more choices and deliver greater standards of taste to its customers.       </p>
      <h2 className='inside'>Inside Our showroom</h2><br/>
      <div className='showroom'>
      <img src='https://vrchennai.com/UploadFile/storeImageGallery/IBACO-store-pic1.jpg'></img>
      <img src='https://img.freepik.com/free-vector/leafy-golden-rectangle-frame_53876-100786.jpg'className='border'></img>
     </div>
    </div>
    
    </>
  )
}