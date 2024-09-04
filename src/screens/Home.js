import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home(){
  return(
    <div>
      <div><Navbar/></div>
     
      <div id="image-container">
      <img
                src="https://t3.ftcdn.net/jpg/02/79/75/74/360_F_279757406_PjHAMPHNAEyf5NvyEYlC7mJNRKHHkmCz.jpg" width="100%"
                alt="Description"
                className="large-image" 
 />
      </div>
      <div id="image-container">
      <img
                src="https://t3.ftcdn.net/jpg/03/51/02/46/360_F_351024684_qRJBZa0XlvKs5bKDHVqlcbVF2ux4tDga.jpg"  width="100%" 
                alt="Description"
                className="large-image" 
 />
 

      </div>
      <div> <Footer/> </div>
    </div>
  )
}