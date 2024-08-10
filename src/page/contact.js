import React from 'react';
import '../cssfile/contact.css'
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/Navbar';
function Contactpage() {
 const backpage=()=>{
  window.location='/'
 }
  return (
    <div className="App">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
     <Navbar/>
      <div className="contact-section">
      <h2>My Contact</h2>
        <img src="photo/profile2.png" alt="Profile" className="contact-image" />
       
        <ul>
          <li><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;0958490401</li>
          <li><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp; kanttanaibuntat@gmail.com</li>
          <li><i class="fa-brands fa-line"></i>&nbsp;&nbsp;<a href="https://line.me/ti/p/yo-geMm5OL?fbclid=IwY2xjawEe0whleHRuA2FlbQIxMAABHcDZSdR98T8kspUqc2VqX6vJagZxsujM-LQR8MHwTV71o6Vxfb-2wzkjhw_aem_oRqkIDe9t6MP466uocMskw">Add Line</a></li>
        </ul>
       
      </div>
      <button className="custom-button" onClick={backpage}>Back</button>
    </div>
  );
}

export default Contactpage;
