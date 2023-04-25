#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(url, (err, response, body) => {
	if (err) {
		console.error(err);
		return;
	}

	const movie = JSON.parse(body);
	const characterURL = movie.characters;
	let characters = [];

	// Make a request for each character URL and push the name to the characters array
	const makeRequest = (eachURL) => {
		request.get(eachURL, (err, response, body) => {
			if (err) {
				console.error(err);
				return;
			}

			const character = JSON.parse(body);
			characters.push(character.name);

			// If we have received all the character details, print the names in order
			if (characters.length === characterURL.length) {
				movie.characters.forEach((eachURL) => {
					const index = characterURL.indexOf(eachURL);
					console.log(characters[index]);
				});
			}
		});
	};

	characterURL.forEach(makeRequest);
});
