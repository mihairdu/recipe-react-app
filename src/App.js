import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	//EDAMAM API signup id and key
	const APP_ID = "30e006ba";
	const APP_KEY = "31fc5934030b41b4340192e4e60b8793";

	useEffect(() => {}, []);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = response.json();
		console.log(data);
	};

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
		</div>
	);
};

export default App;
