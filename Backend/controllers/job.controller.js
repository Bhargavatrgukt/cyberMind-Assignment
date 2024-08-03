import Job from "../models/job.model.js";

export const createJob = async (req, res) => {
  const { title, description, companyName, location, salaryRange, applicationDeadline } = req.body;
   // Ensure `req.user` is populated correctly

  try {
    const newJob = new Job({
      title,
      description,
      companyName,
      location,
      salaryRange,
      applicationDeadline,
    });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllJobs = async (req, res) => {
 
  try {
    const jobs = await Job.find({ });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};


/*
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { title, description, companyName, location, salaryRange, applicationDeadline } = req.body;

  try {
    const job = await Job.findByIdAndUpdate(
      id,
      { title, description, companyName, location, salaryRange, applicationDeadline },
      { new: true }
    );
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};



export const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

*/
