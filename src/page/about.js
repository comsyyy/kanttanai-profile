import React from 'react';
import '../cssfile/contact.css';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/Navbar';
function Contactpage() {
  const backpage = () => {
    window.location = '/';
  };

  return (
    <div className="App">
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
    <Navbar/>
      <div className="contact-section">
        <h2>เกี่ยวกับตัวเอง</h2>
      
        <p>ชื่อ : นายกันต์ดนัย บุญทัด </p>
        <p>ชื่อเล่น : คอม</p>
        <p>การศึกษา : จบปริญาตรี จากมหาวิทยาลัยรังสิต วิทยาลัยนวัตกรรมดิจิทัลเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์ ปีที่สําเร็จการศึกษา 2567</p>
        <p>สกิล : Nodejs Javascript React Python Ardunio Mysql</p>
      </div>
      
      <button className="custom-button" onClick={backpage}>Back</button>
    </div>
  );
}

export default Contactpage;
