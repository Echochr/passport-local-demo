import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import session from 'express-session';
// import SequelizeSession from 'connect-session-sequelize';
import passport from 'passport';
import strategy from './passport.js';
import checkAuthentication from './middleware/checkAuthentication.js';
import { findAccountById } from './models/accounts/accounts.model.js';
import v1Router from './routes/v1Router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// const SequelizeStore = SequelizeSession(session.Store);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // store: new SequelizeStore({
    //     db: sequelize,
    // }),
    cookie: {
        maxAge: 1000 * 60 * 5, // 5 minutes
    }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);

// Store user object to session
passport.serializeUser((account, done) => {
    done(null, account);
});

// Convert session to user object
passport.deserializeUser(async (account, done) => {
    const found = await findAccountById(account.id)
    done(null, found);
});

app.use('/v1', v1Router);

export default app;