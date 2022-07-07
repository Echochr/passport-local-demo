import passport from 'passport';
import pkg from 'passport-local';
import { authenticateAccount } from './models/accounts/accounts.model.js';

const LocalStrategy = pkg.Strategy;

const verifyCallback = async (username, password, done) => {
    try {
        const authenticatedAccount = await authenticateAccount(username, password);
        if (!authenticatedAccount) {
            return done(null, false);
        }
        return done(null, authenticatedAccount);
    } catch (err) {
        return done(err);
    }
}

const strategy = new LocalStrategy(verifyCallback);

export default strategy;