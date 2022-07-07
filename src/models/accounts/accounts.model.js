import bcrypt from 'bcrypt';
import Account from './accounts.postgres.js';

const SALT_ROUNDS = 12;
const SALT = bcrypt.genSaltSync(SALT_ROUNDS);
const hashPassword = (password) => bcrypt.hashSync(password, SALT);
const verifyPassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

export async function createNewAccount(username, password) {
    return Account.create({ username, password: hashPassword(password) });
}

export async function authenticateAccount(username, password) {
    const account = await Account.findOne({
        where: {
            username,
        }
    });

    const isValidPassword = await verifyPassword(password, account.password);
    if (account && isValidPassword) {
        return account.toJSON();
    }
}

export async function findAccountById(accountId) {
    return Account.findOne({
        where: {
            id: accountId
        }
    });
}

// (async () => {
    // await createNewAccount('Pikachu Lee', 'pikachu');
    // await findAccountById(6);
// })();