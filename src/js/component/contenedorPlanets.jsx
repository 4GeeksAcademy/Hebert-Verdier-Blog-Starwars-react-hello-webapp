import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardPlanet } from "./cardPlanet.jsx";
import "../../styles/home.css";

export const ContenedorPlanets = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className={store.planetsList && "card-container card-group"}>
            <div className={store.planetsList && "card-container-child d-flex flex-row"}>
                {store.planetsList ? store.planetsList.length == 0 ? (<div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>) : store.planetsList.map((item, index) => (
                    <CardPlanet key={index} id={item.id} name={item.name} climate={item.climate} population={item.population} orbital_period={item.orbital_period} rotation_period={item.rotation_period} diameter={item.diameter} image={item.image} />
                )) :
                    <p>No se encontraron planetas</p>
                }
            </div>
        </div>
    );
}