import React from 'react';
// import Popular from './Popular';
import { Routes, Route, Link } from 'react-router-dom';
import American from './American';
import Chinese from './Chinese';
import French from './French';
import Italian from './Italian';
import Korean from './Korean';
import Thai from './Thai';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';
import Home from './Home';
import CuisineRecipe from './CuisineRecipe';

const Main = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/SearchResults/' + input);
	};
	const changeHandler = (e) => {
		setInput(e.target.value);
	};

	return (
		<>
			<nav>
				<div className='header'>
					<Link to='/'>
						<h1>Foodie</h1>
					</Link>
				</div>
				<ul>
					<Link to='/american'>
						<li>American</li>
					</Link>
					<Link to='/chinese'>
						<li>Chinese</li>
					</Link>
					<Link to='/french'>
						<li>French</li>
					</Link>
					<Link to='/italian'>
						<li>Italian</li>
					</Link>
					<Link to='/korean'>
						<li>Korean</li>
					</Link>
					<Link to='/thai'>
						<li>Thai</li>
					</Link>
				</ul>
			</nav>

			<SearchForm
				submitHandler={submitHandler}
				input={input}
				changeHandler={changeHandler}
			/>

			{/* <Popular /> */}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/american' element={<American />} />
				<Route path='/chinese' element={<Chinese />} />
				<Route path='/french' element={<French />} />
				<Route path='/italian' element={<Italian />} />
				<Route path='/korean' element={<Korean />} />
				<Route path='/thai' element={<Thai />} />
				<Route
					path='/searchResults/:input'
					element={<SearchResults input={input} />}
				/>
				<Route path='/recipe/:id' element={<Recipe />} />
				<Route path='/cuisineRecipe/:id' element={<CuisineRecipe />} />
			</Routes>
		</>
	);
};

export default Main;
