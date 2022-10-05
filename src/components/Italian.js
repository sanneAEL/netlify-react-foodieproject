import React, { useEffect, useState } from 'react';

function Italian(props) {
	const [italian, setItalian] = useState([]);

	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&cuisine=Italian`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItalian(data.results);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{italian.map((data) => {
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

export default Italian;
