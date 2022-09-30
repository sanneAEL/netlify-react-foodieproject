import React from 'react';

function Popular(props) {

const url= `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_KEY}&number=5`;

fetch(url)
				.then((res) => res.json())
				.then((res) => {
					console.log(1);
	
				})
				.catch(console.error);
		
		

    return (
        <div>
           Popular Pick 
        </div>
    );
}

export default Popular;