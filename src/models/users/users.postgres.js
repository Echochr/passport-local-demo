import { DataTypes } from 'sequelize';
import sequelize from '../../sequelize.js';

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default User;