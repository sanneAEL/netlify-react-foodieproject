import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './cuisine.css';

function French({}) {
	const [french, setFrench] = useState([]);
	let params = useParams();

	useEffect(() => {
		getResult(params);
	}, [params.id]);
	const getResult = () => {
		const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&cuisine=French`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setFrench(data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='cuisine'>
			{french.map((data) => {
				return (
					<div className='CuisineContainer'>
						<Link to={`/recipe/${data.id}`}>
							<div key={data.id}>
								<h3>{data.title}</h3>
								<img src={data.image} alt={data.title} />
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default French;
