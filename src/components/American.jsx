import React, { useEffect,useState } from 'react';


function American(props) {

const[american,setAmerican]=useState([]);

useEffect(()=> {


const url= `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECIPE_KEY}&cuisine=American`;


fetch(url)
  .then(res => {
    return res.json();
  })
  .then((data)=>{setAmerican(data.recipes);
  })
  .catch(err => {
    console.log(err);
  });
  
 },[]);
  
 
    return (
        <div>
            <h1>American style recipes</h1>
           {american.map((recipe)=>{
            return(
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title} />

                </div>
            )
           
           })}
        </div>
    );
}




export default American;