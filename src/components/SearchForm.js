import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm({ submitHandler, input, changeHandler }) {
	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					onChange={changeHandler}
					type='text'
					placeholder='Search Recipe'
					value={input}
				/>

				<button>🍳</button>
			</form>
		</>
	);
}

export default SearchForm;
