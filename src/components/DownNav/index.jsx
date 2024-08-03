import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import NavBar from '../NavBar';
import './index.css';

const DownNav = ({ onFilterChange, filterCriteria }) => {
  const handleInputChange = (key, value) => {
    onFilterChange({ [key]: value });
  };

  return (
    <div>
      <NavBar />
      <div className="down-navbar">
        <div className="search-container">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search By Job Title"
            className="search-input"
            value={filterCriteria.jobTitle}
            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
          />
        </div>
        <div className="vertical-line"></div>
        <div className="search-container">
          <FaMapMarkerAlt className="icon" />
          <input
            type="text"
            placeholder="Location"
            className="search-input"
            value={filterCriteria.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
        </div>
        <div className="vertical-line"></div>
        <div className="search-container">
          <FaBriefcase className="icon" />
          <input
            type="text"
            placeholder="Job Type"
            className="search-input"
            value={filterCriteria.jobType}
            onChange={(e) => handleInputChange('jobType', e.target.value)}
          />
        </div>
        <div className="vertical-line"></div>
        <div className="salary-slider-container">
          <div className="slider-labels">
            <span>Salary Range: ${filterCriteria.minSalary} - ${filterCriteria.maxSalary}</span>
          </div>
          <div className="slider">
            <input
              type="range"
              min="0"
              max="100000"
              value={filterCriteria.minSalary}
              onChange={(e) => handleInputChange('minSalary', Number(e.target.value))}
              className="slider-input"
              id="min-salary"
            />
            <input
              type="range"
              min={filterCriteria.minSalary}
              max="100000"
              value={filterCriteria.maxSalary}
              onChange={(e) => handleInputChange('maxSalary', Number(e.target.value))}
              className="slider-input"
              id="max-salary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownNav;
