// import React, { useEffect,useState } from 'react';


// function Popular(props) {

// const[popular,setPopular]=useState([]);

// useEffect(()=> {

// const url =`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPE_KEY}&number=5`


// fetch(url)
//   .then(res => {
//     return res.json();
//   })
//   .then((data)=>{setPopular(data.recipes);
//   })
//   .catch(err => {
//     console.log(err);
//   });
//  },[]);
  
 
//     return (
//         <div>
//             <h1>Trending</h1>
//            {popular.map((recipe)=>{
//             return(
//                 <div key={recipe.id}>
//                     <h3>{recipe.title}</h3>
//                     <img src={recipe.image} alt={recipe.title} />
// {console.log(recipe.image)}
//                 </div>
//             )
           
//            })}
//         </div>
//     );
// }




// export default Popular;