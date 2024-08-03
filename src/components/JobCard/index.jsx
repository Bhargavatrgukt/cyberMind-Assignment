import React from 'react';
import "./index.css"

const JobCard = ({ job }) => {
  const { companyName, title, description, location, salaryRange, applicationDeadline } = job;
  const startingLetter = companyName[0].toUpperCase();

  return (
    <div className="job-card">
      <div className='intial-flex'>
      <div className='company-logo'>
        {startingLetter}
      </div>
      <p className='deadline'>Deadline: {new Date(applicationDeadline).toLocaleDateString()}</p>
      </div>
      <h3>{title}</h3>
      <div className='intial-flex'>
      <p>Company: {companyName}</p>
      <p>Location: {location}</p>
      <p>Salary: {salaryRange.min} - {salaryRange.max}</p>
      </div>
      <p>{description}</p>
      <button className='submit-btn'>Apply</button>
    </div>
  );
};

export default JobCard;
