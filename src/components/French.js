import React, { useEffect, useState } from 'react';

function French(props) {
	const [french, setFrench] = useState([]);

	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&cuisine=French`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setFrench(data.results);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{french.map((data) => {
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

export default French;
