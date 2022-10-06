import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipe() {
	const [recipe, setRecipe] = useState([]);
	let params = useParams();

	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_RECIPE_KEY}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setRecipe(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [params.id]);
	console.log(recipe);

	return (
		<div>
			<div className='title'>
				<h3>{recipe.title}</h3>
				<img src={recipe.image} alt={recipe.title} />
			</div>

			<h3 className='extendedIngredients'> Ingredient list</h3>

			{/* {recipe.extendedIngredients.map((ingredient, index) => (
				<div key={index}>
					<li key={ingredient.name}>{ingredient.original}</li>
				</div>
			))} */}

			<div className='Instruction'>
				<h3 className='Instruction'>Instruction: </h3>
				<p>{recipe.instructions}</p>
			</div>
		</div>
	);
}

export default Recipe;
