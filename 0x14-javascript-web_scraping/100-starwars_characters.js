#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request.get(url, (err, response, body) => {
	if (err) {
		console.error(err);
		return;
	}

	const movie = JSON.parse(body);
	const characters = movie.characters;

	characters.forEach(character => {
		request.get(character, (err, response, body) => {
			if (err) {
				console.error(err);
				return;
			}

			const data = JSON.parse(body);
			console.log(data.name);
		});
	});
});
