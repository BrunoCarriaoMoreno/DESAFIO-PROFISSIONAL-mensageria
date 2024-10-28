import express from 'express';
import { addJob, testEndpoint } from './Controller/Controller';

const router = express.Router();

router.get('/test', testEndpoint);

router.post('/jobs', addJob);

export default router;