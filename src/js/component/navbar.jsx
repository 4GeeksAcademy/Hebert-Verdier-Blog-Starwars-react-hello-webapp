import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { FavoriteItem } from "./favoriteItem.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-2">StarWars</span>
			</Link>
			<div className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</a>
				<ul onClick={(e) => e.stopPropagation()} className="dropdown-menu dropdown-menu-end">
					{store.favoritesList.map((item, index) => (
						<FavoriteItem key={index} name={item} />
					))}
				</ul>
			</div>
		</nav>
	);
};