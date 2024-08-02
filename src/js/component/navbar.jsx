import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import { FavoriteItem } from "./favoriteItem.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-0 bg-black" >
			<Link to="/">
				<img style={{ maxWidth: '100px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s" alt="" />
			</Link>
			<div className="nav-item dropdown">
				<a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Create new
				</a>
				<ul className="dropdown-menu dropdown-menu-end">
					<li>
						<a className="dropdown-item d-flex justify-content-between d-flex align-items-center" href="#">
							<Link className="text-decoration-none" to={"/addCharacter"}>Add Character</Link>
						</a>
					</li>
					<li>
						<a className="dropdown-item d-flex justify-content-between d-flex align-items-center" href="#">
							<Link className="text-decoration-none" to={"/addPlanet"}>Add Planet</Link>
						</a>
					</li>
				</ul>
			</div>
			<div className="nav-item dropdown">
				<a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</a>
				<ul onClick={(e) => e.stopPropagation()} className="dropdown-menu dropdown-menu-end">
					{store.favoritesList ? store.favoritesList.length == 0 ? (<div className="spinner-border text-warning" role="status">
						<li className="visually-hidden">Loading...</li>
					</div>) : store.favoritesList.map((item, index) => (
						<FavoriteItem key={index} name={item.name} />
					)) :
						<li>No favorites found</li>
					}
				</ul>
			</div>
		</nav>
	);
}