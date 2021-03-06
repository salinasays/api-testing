const express = require('express');
const app = express();
const User = require('./models/user-model');

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/users', (req, res) => {
  User.findAll()
  .then((data) => {
    res.send(data);
  })
});

app.get('/users/id/:id', (req, res) => {
	User.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
})

app.get('/users/username/:username', (req, res) => {
	User.findAll({
		where: {
			username: "test1"
		}
	})
	.then((data) => {
		res.send(data)
	})
})

module.exports = app;
