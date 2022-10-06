import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function SearchResults({ input }) {
	const [search, setSearch] = useState([]);
	let params = useParams();

	useEffect(() => {
		getResult(params.input);
	}, [params.input]);

	const getResult = () => {
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&query=${input}`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSearch(data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			{search.map((data) => (
				<div className='resultContainer'>
					<Link to={`/recipe/${data.id}`}>
						<div key={data.id}>
							<h3>{data.title}</h3>
							<img src={data.image} alt={data.title} />
							{console.log(data.image)}
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}

export default SearchResults;
