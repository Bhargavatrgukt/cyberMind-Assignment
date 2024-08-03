import React, { useState } from 'react';
import JobModal from '../JobModal';
import './index.css';

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <div className="nav-layout">
        <img src="https://i.postimg.cc/K8Vz3jqb/cmwlogo-1-1.png" alt="logo" />
        <h1 className="heading">Home</h1>
        <h1 className="heading">Find Jobs</h1>
        <h1 className="heading">Find Talents</h1>
        <h1 className="heading">About Us</h1>
        <h1 className="heading">Testimonials</h1>
        <button className="btn" onClick={openModal}>Create Jobs</button>
        {isModalOpen && <JobModal onClose={closeModal} />}
      </div>
    );
  };
  
  export default NavBar;