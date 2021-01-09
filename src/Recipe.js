import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={styles.recipe}>
			<h1>{title}</h1>
			<ol>
				{ingredients.map((ingredient) => (
					<li>{ingredient.text}</li>
				))}
			</ol>
			<p>{calories}</p>
			<img className={styles.image} src={image} alt=""></img>
		</div>
	);
};

export default Recipe;
