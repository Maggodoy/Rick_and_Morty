require ('dotenev').config();
const {Sequilize} =require('sequilize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const modelUser = require ('./models/User');
const modelFavorite = require ('./models/Favorite');

const sequilize = new Sequilize(
 `postgress://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/rickandmorty`,
 { logging: falsse, native: false }
);

modelUser(sequilize);
modelFavorite(sequilize);

const { User, Favorite }= sequilize.models;
User.belongsToMany(Favorite, {through: 'user_favorite'});
Favorite.belongsToMany(User, {through: 'user_favorite'});

module.exports = {
    ...sequilize.models,
    conn: sequilize,
};