import express from 'express';
import passport from 'passport';
import {
    httpGetLoginPage,
    httpAuthenticateAccount,
} from './login.controller.js';

const loginRouter = express.Router();

loginRouter.get('/', httpGetLoginPage);
loginRouter.post('/', passport.authenticate('local', {
    successRedirect: '/v1/home',
    failureRedirect: '/v1/login'
}));

export default loginRouter;