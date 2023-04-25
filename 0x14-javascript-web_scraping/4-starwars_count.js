#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const characterId = '18';
//let count = 0;

request.get(url, (err, response, body) => {
	if (err) {
		console.error(err);
		return;
	} else {
		const films = JSON.parse(body).results;
		//films.results.characters.forEach((character) => {
		//	if (character.includes(characterId)) {
		//		count += 1;
		//	}
		//});

		const data = films.reduce((count, film) => {
			if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
				return count + 1;
			}
			return count;
		}, 0);
		console.log(data);
	}
	//console.log(data);
});
