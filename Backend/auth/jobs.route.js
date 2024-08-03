// routes/todoRoutes.js
import express from 'express';
import { createJob, getAllJobs, updateJob, deleteJob } from '../controllers/job.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/', protectRoute, createJob); // Create a new to-do
router.get('/', protectRoute, getAllJobs);    // Get all to-dos for the authenticated user
router.put('/:id', protectRoute, updateJob); // Update a specific to-do by ID
router.delete('/:id', protectRoute, deleteJob); // Delete a specific to-do by ID

export default router;
