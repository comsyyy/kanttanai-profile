import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
const Navbar=()=>{
  const contactpage=()=>{
    window.location='/contactp'
  }
  const aboutpage=()=>{
    window.location='/aboutp'
  }
return(

  <nav className="navbar">
    <div className="navbar-brand">
      Comdev <i className="fa-sharp fa-solid fa-laptop"></i>
    </div>
    <div className="navbar-menu">
  
      <button on onClick={aboutpage}>About</button>
      <button onClick={contactpage}>Contact</button>
    </div>
  </nav>

)
}
export default Navbar;