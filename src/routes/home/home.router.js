import express from 'express';
import {
    httpGetHomePage
} from './home.controller.js';
import checkAuthentication from '../../middleware/checkAuthentication.js';

const homeRouter = express.Router();

homeRouter.get('/', checkAuthentication, httpGetHomePage);

export default homeRouter;