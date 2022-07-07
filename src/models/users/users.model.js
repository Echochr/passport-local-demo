import User from './users.postgres.js';

export async function createNewUser(firstName, lastName) {
    try {
        return await User.create({ firstName, lastName });
    } catch (err) {
        console.error('Create new user failed.', err);
    }
}

export async function findAllUsers() {
    try {
        return await User.findAll({
            order: [['id']],
        });
    } catch (err) {
        console.error('Find all users failed.', err);
    }
}

export async function findUserById(userId) {
    try {
        return await User.findOne({
            where: {
                id: userId,
            },
        });
    } catch (err) {
        console.error('User not found', err);
    }
}

export async function updateOneUser(firstName, lastName, userId) {
    try {
        const [isUpdated] = await User.update({ firstName, lastName }, {
            where: {
                id: userId,
            }
        });
        const updatedUser = await findUserById(userId);

        if (isUpdated === 1 && updatedUser) {
            return updatedUser;
        }
    } catch (err) {
        console.error('Update user failed.', err);
    }
}

export async function deleteOneUser(userId) {
    try {
        const isDeleted = await User.destroy({
            where: {
                id: userId,
            }
        });

        if (isDeleted === 1) {
            console.log('User deleted.');
            return true;
        } else {
            console.log('User not found. No deletion made.');
            return false;
        }
    } catch (err) {
        console.error('Delete user failed.', err);
    }
}

// (async () => {
    // await createNewUser('Tai Man', 'Chan');
    // await findAllUsers();
    // await findUserById(7);
    // await updateOneUser('Tai Man', 'Chan', 7);
    // await deleteOneUser(7);
// })();