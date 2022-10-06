import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './recipes.css';

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
			<div className='size'>
				<div className='title'>
					<h3>{recipe.title}</h3>
					<img src={recipe.image} alt={recipe.title} />
				</div>

				<div className='Ingredients'>
					<h3 className='extendedIngredients'> Ingredient list</h3>

					{recipe &&
						recipe.extendedIngredients &&
						recipe.extendedIngredients.map((ingredient, index) => (
							<div key={index}>
								<li key={ingredient.name}>{ingredient.original}</li>
							</div>
						))}
				</div>
			</div>

			<div className='Instruction'>
				<h3 className='Instruction'>Instruction: </h3>

				<h2 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h2>
			</div>
		</div>
	);
}

export default Recipe;
