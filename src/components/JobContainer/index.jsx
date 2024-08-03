import JobCard from '../JobCard';
import "./index.css"

const JobContainer = ({ jobs }) => (
  <div className="job-container">
    {jobs.map((job) => (
      <JobCard key={job._id} job={job} />
    ))}
  </div>
);

export default JobContainer;