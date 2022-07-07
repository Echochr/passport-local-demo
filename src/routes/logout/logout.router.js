import express from 'express';
import { httpLogout } from './logout.controller.js';

const logoutRouter = express.Router();

logoutRouter.get('/', httpLogout);

export default logoutRouter;