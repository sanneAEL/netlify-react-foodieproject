import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function American(props) {
	const [american, setAmerican] = useState([]);

	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&cuisine=American`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setAmerican(data.results);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{american.map((data) => {
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

export default American;
