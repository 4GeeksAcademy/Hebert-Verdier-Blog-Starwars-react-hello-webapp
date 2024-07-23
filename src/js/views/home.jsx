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
		<div className="bg-black">
			<div>
				<h1 className="text-center text-white">
					Characters
				</h1>
				<ContenedorCharacters />
			</div>
			<div className="pt-3">
				<h1 className="text-center text-white">
					Planets
				</h1>
				<ContenedorPlanets />
			</div>
		</div>
	);
}