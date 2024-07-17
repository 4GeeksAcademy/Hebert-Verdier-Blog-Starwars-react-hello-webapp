import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardPlanet } from "./cardPlanet.jsx";

export const ContenedorPlanets = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
                {store.planetsList.map((item, index) => (
                    <CardPlanet key={index} id={index + 1} name={item.name} population={item.population} terrain={item.terrain} />
                ))}
            </div>
        </div>
    );
}