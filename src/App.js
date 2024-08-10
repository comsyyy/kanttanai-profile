import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';

function App() {
  const resumepage=()=>{
    window.location='/resumep'
  }
  const Projectpage=()=>{
    window.location='/mainp'
  }
  return (
    <div className="App">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <Navbar/>
      <img src="photo/profile.jpg" alt="Profile" className="profile-image" />
      <div className="typewriter-text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Welcome to my Profile Comdev <i class="fa-sharp fa-solid fa-laptop"></i>')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteChars(8) // Delete the last 8 characters
              .typeString(' <i class="fas fa-code"></i> Kanttanai Buntat')
              .pauseFor(2500)
              .start();
          }}
        />
        <button className="custom-button" onClick={Projectpage}>Project</button>
        <button className="custom-button" onClick={resumepage}>Resume</button>
      </div>
      {/* Add butterfly elements here */}
      <div className="butterfly butterfly1"></div>
      <div className="butterfly butterfly2"></div>
      <div className="butterfly butterfly3"></div>
    </div>
  );
}

export default App;
