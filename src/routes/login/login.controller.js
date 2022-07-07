import path from 'path';
import { fileURLToPath } from 'url';
import { authenticateAccount } from '../../models/accounts/accounts.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function httpGetLoginPage(req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/v1/home');
    } else {
        res.sendFile(path.join(__dirname, '..', '..', '/login.html'));
    }
}

export async function httpAuthenticateAccount(req, res) {
    const { username, password } = req.body;
    try {
        const isAuthenticated = await authenticateAccount(username, password);
        if (isAuthenticated) {
            req.session.regenerate((err) => {
                if (err) return next(err);
    
                req.session.save((err) => {
                    if (err) return next(err);
                    res.redirect('/v1/home');
                });
            });
        } else {
        res.status(401).send({
            message: 'Invalid username or password'
        });
    }
    } catch (err) {
        throw new Error(err);
    }
}