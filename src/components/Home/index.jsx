import React, { useState, useEffect, useCallback } from 'react';
import DownNav from '../DownNav';
import JobContainer from '../JobContainer'; 

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    jobTitle: '',
    location: '',
    jobType: '',
    minSalary: 0,
    maxSalary: 100000,
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://cybermind-assignment.onrender.com/api/jobs/');
      const data = await response.json();
      setJobs(data);
      setFilteredJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const handleFilterChange = useCallback((filters) => {
    const { jobTitle, location, jobType, minSalary, maxSalary } = filters;

    const filtered = jobs.filter(job => {
      return (
        (jobTitle ? job.title.toLowerCase().includes(jobTitle.toLowerCase()) : true) &&
        (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true) &&
        (jobType ? job.jobType.toLowerCase().includes(jobType.toLowerCase()) : true) &&
        (job.salaryRange.min >= minSalary && job.salaryRange.max <= maxSalary)
      );
    });

    setFilteredJobs(filtered);
    setFilterCriteria(filters);
  }, [jobs]);

  return (
    <div>
      <DownNav onFilterChange={handleFilterChange} filterCriteria={filterCriteria} />
      <JobContainer jobs={filteredJobs} />
    </div>
  );
};

export default Home;
