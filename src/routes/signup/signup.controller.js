import path from 'path';
import { fileURLToPath } from 'url';
import { createNewAccount } from '../../models/accounts/accounts.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function httpGetSignupPage(req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/v1/home');
    } else {
        res.sendFile(path.join(__dirname, '..', '..', '/signup.html'));
    }
}

export async function httpCreateNewAccount(req, res) {
    const { username, password } = req.body;
    try {
        await createNewAccount(username, password);
        res.redirect(302, '/v1/login');
    } catch (err) {
        res.redirect(302, '/v1/signup?reason=duplicate_username');
    }
}
