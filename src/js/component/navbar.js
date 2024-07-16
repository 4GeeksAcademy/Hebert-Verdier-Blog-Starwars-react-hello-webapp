import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites
				</a>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#">Action</a></li>					
				</ul>
			</li>
		</nav>
	);
};
