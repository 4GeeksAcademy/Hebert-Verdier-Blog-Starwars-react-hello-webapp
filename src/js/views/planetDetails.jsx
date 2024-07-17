import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const PlanetDetails = () => {
    let { id } = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getDetailsPlanet(id);
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    {id == 1 ?
                        <img src={`https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png`} className="card-img-top" alt="..." />
                        :
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
                    }
                    <h2>{store.planet.name}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <p>Name: {store.planet.name}</p>
                    <p>Climate: {store.planet.climate}</p>
                    <p>Population: {store.planet.population}</p>
                    <p>Orbital Period: {store.planet.orbital_period}</p>
                    <p>Rotation Period: {store.planet.rotation_period}</p>
                    <p>Diameter: {store.planet.diameter}</p>
                </div>
            </div>
            <Link className="btn btn-primary" to={"/"}>Back to list</Link>
        </div>
    );
}