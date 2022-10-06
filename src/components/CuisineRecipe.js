import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CuisineRecipe() {
	const [cuisineRecipe, setCuisineRecipe] = useState([]);
	let params = useParams();

	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_RECIPE_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setCuisineRecipe(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [params.name]);

	return (
		<div className='container'>
			<h3>{cuisineRecipe.title}</h3>
			<img src={cuisineRecipe.image} alt={cuisineRecipe.title} />
			<p>{cuisineRecipe.extendedIngredients}</p>
			<p>{cuisineRecipe.analyzedInstruction}</p>
		</div>
	);
}

export default CuisineRecipe;
