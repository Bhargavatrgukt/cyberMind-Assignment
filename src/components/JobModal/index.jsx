import React, { useState } from 'react';
import './index.css';

const JobModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    companyName: '',
    location: '',
    jobType: '',
    minSalary: '',
    maxSalary: '',
    applicationDeadline: '',
    description: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    onClose();
    try {
      const response = await fetch('https://cybermind-assignment.onrender.com/api/jobs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          companyName: formData.companyName,
          location: formData.location,
          salaryRange: {
            min: Number(formData.minSalary),
            max: Number(formData.maxSalary),
          },
          applicationDeadline: new Date(formData.applicationDeadline).toISOString(),
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        alert(`Error submitting job: ${errorData.message || 'An unknown error occurred'}`);
        return;
      }
  
      alert('Job posted successfully');
      setFormData({
        title: '',
        companyName: '',
        location: '',
        jobType: '',
        minSalary: '',
        maxSalary: '',
        applicationDeadline: '',
        description: ''
      });
       // Close modal after successful submission
  
    } catch (error) {
      console.error('Error submitting job:', error.message);
      alert('Error submitting job: ' + error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className='modal-heading'>Create Job Opening</h2>
        <form onSubmit={handleSubmit}>
          <div className='jbot-jobl'>
            <div className='label-input'>
              <label htmlFor='title'>Job Title</label>  
              <input
                type="text"
                placeholder="Job Title"
                id="title"
                className='in'
                value={formData.title}
                onChange={handleChange}
              />
            </div>  
            <div className='label-input'> 
              <label htmlFor='companyName'>Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                id="companyName"
                className='in'
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='jbot-jobl'>
            <div className='label-input'>
              <label htmlFor='location'>Location</label> 
              <input
                type="text"
                placeholder="Location"
                id="location"
                className='in'
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className='label-input'>
              <label htmlFor='jobType'>Job Type</label>
              <input
                type='text'
                placeholder='Job Type'
                id="jobType"
                className='in'
                value={formData.jobType}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='jbot-jobl'>
            <div className='label-input'>  
              <label htmlFor='salaryRange'>Salary Range</label>
              <div>
                <input
                  type="number"
                  placeholder="Min Salary"
                  id="minSalary"
                  className='salaryRange'
                  value={formData.minSalary}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="Max Salary"
                  id="maxSalary"
                  className='salaryRange'
                  value={formData.maxSalary}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='label-input'>
              <label htmlFor='applicationDeadline'>Application Deadline</label>
              <input
                type="date"
                placeholder="Application Deadline"
                id="applicationDeadline"
                className='in'
                value={formData.applicationDeadline}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className='label-input'>
              <label htmlFor='description'>Description</label>
              <textarea
                placeholder="Description"
                id="description"
                className='Description'
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>  
          </div>
          <div className='jbot-jobl'>
            <button type="button" onClick={onClose} className='close-btn'>Close</button>
            <button type="submit" className='submit-btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobModal;
