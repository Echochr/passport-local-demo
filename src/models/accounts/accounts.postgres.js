import { DataTypes } from 'sequelize';
import sequelize from '../../sequelize.js';

const Account = sequelize.define('Account', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Account;
