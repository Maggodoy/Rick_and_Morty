require('dotenv').config({ path: './src/.env' });
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// const modelUser = require('./src/models/User');
// const modelFavorite = require('./src/models/Favorite');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/rickandmorty`,
   { logging: false, native: false }
);

// COMENTAMOS ESTO TAMBIÉN PARA QUE NO SE ROMPA:
// modelUser(sequelize);
// modelFavorite(sequelize);

// const { User, Favorite } = sequelize.models;
// User.belongsToMany(Favorite, { through: 'user_favorite' });
// Favorite.belongsToMany(User, { through: 'user_favorite' });

module.exports = {
    // ...sequelize.models,
    conn: sequelize,
};