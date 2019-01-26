const axios = require('axios');
const bcrypt = require('bcryptjs')
const { authenticate, generateToken } = require('../auth/authenticate');

const db = require('../database/dbConfig')

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);

  db.insert(user)
    .then(ids => {
      db.findById(ids)
        .then(user => {
          const token = generateToken(user)
          res.statu(201).json({id:user.id, token})
        })
        .catch(err => {
          res.status(404).send('Error',err)
        }
        )
    })
    .catch(err => {
    res.status(500).send('Error', err)
  })
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
