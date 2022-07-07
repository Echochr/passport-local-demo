import express from 'express';

import signupRouter from './signup/signup.router.js';
import loginRouter from './login/login.router.js';
import logoutRouter from './logout/logout.router.js';
import homeRouter from './home/home.router.js';

const v1Router = express.Router();

v1Router.use('/signup', signupRouter);
v1Router.use('/login', loginRouter);
v1Router.use('/logout', logoutRouter);
v1Router.use('/home', homeRouter);

export default v1Router;