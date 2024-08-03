// routes/todoRoutes.js
import express from 'express';
import { createJob, getAllJobs } from '../controllers/job.controller.js';


const router = express.Router();

router.post('/', createJob); // Create a new to-do
router.get('/',  getAllJobs);    // Get all to-dos for the authenticated user
//router.put('/:id',  updateJob); // Update a specific to-do by ID
//router.delete('/:id', deleteJob); // Delete a specific to-do by ID

export default router;
