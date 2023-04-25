#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (err, response, body) => {
	if (err) {
		console.error(err);
		return;
	}

	const todos = JSON.parse(body);
	const completedByUser = {};

	todos.forEach(todo => {
		if (todo.completed) {
			const userId = todo.userId;
			if (completedByUser[todo.userId]) {
				completedByUser[todo.userId]++;
			} else {
				completedByUser[todo.userId] = 1;
			}
		}
	});
	console.log(completedByUser);
});
