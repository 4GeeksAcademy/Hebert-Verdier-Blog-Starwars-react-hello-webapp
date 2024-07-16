import React from "react";
import { Link } from "react-router-dom";

export const CardPlanet = ({ id, name, population, terrain }) => {
    return (
        <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Population: {population}</p>
                    <p className="card-text">Terrain: {terrain}</p>
                    <Link className="btn btn-primary" to={"/planetDetails/" + id}>Learn More!</Link>
                </div>
            </div>
        </div>
    );
}