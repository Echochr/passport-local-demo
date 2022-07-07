import express from 'express';
import {
    httpGetSignupPage,
    httpCreateNewAccount,
} from './signup.controller.js';

const signupRouter = express.Router();

signupRouter.get('/', httpGetSignupPage);
signupRouter.post('/', httpCreateNewAccount);

export default signupRouter;