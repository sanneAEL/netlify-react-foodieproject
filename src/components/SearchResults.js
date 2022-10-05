import React from 'react';
import { useState, useEffect } from 'react';

function SearchResults({ input }) {
	const [search, setSearch] = useState([]);
	const getResult = () => {
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&query=${input}`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSearch(data.results);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getResult(input);
	}, []);
	return (
		<div>
			{search.map((data) => {
				return (
					<div key={data.id}>
						<h3>{data.title}</h3>
						<img src={data.image} alt={data.title} />
						{console.log(data.image)}
					</div>
				);
			})}
		</div>
	);
}

export default SearchResults;
