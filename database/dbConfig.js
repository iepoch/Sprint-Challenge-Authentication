const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {

    insert: (user) => {
        return db('users').insert(user);
    },
    getByUser: (username) => {
        return db('users').where('username', username).first()
    },
    findById: (id) => {
        return db('users').where('id', id).first();
    }
}
