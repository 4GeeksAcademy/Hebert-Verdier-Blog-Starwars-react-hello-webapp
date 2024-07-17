import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { ContenedorCharacters } from "../component/contenedorCharacters.jsx";
import { ContenedorPlanets } from "../component/contenedorPlanets.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getPlanets();
	}, [])

	return (
		<div>
			<div>
				<h1 className="text-center">
					Characters
				</h1>
				<ContenedorCharacters />
			</div>
			<div>
				<h1 className="text-center">
					Planets
				</h1>
				<ContenedorPlanets />
			</div>
		</div>
	);
}