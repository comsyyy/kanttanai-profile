import React, { useState } from 'react';
import '../cssfile/resume.css';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/Navbar';
import { Modal, Button } from 'react-bootstrap';

function Resumepage() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <Navbar />
      <div className="contact-section">

        <img 
          src="photo/resume.jpg" 
          alt="Resume" 
          className="resume-image" 
          onClick={handleShow}
          style={{ cursor: 'pointer' }}
        />

      </div>
      <Button className="custom-button" onClick={() => window.location = '/'}>Back</Button>

      {/* Modal for full-size image */}
      <Modal show={showModal} onHide={handleClose} size="sm" fullscreen="true">
        
        <Modal.Body>
          <img 
            src="photo/resume.jpg" 
            alt="Full Resume" 
            className="full-image"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <a href="photo/resume.jpg" download="resume.jpg">
            <Button variant="primary">Download</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Resumepage;
