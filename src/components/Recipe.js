import { useEffect, useState } from 'react';

function Recipe({ input }) {
	const [recipe, setRecipe] = useState([]);
	const getResult = () => {
		const url = `https://api.spoonacular.com/recipes/${input.id}/information?apiKey=${process.env.REACT_APP_RECIPE_KEY}`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setRecipe(data.results);
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
		<div className='container'>
			<h3>{recipe.title}</h3>
			<img src={recipe.image} alt={recipe.title} />
			<p>{recipe.extendedIngredients}</p>
			<p>{recipe.analyzedInstruction}</p>
		</div>
	);
}

export default Recipe;
