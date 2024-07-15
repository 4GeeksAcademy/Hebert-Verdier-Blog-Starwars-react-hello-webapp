import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardPlanet } from "./cardPlanet.jsx";

export const ContenedorPlanets = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="row">
            {store.planetsList.map((item, index) => (
                <CardPlanet key={index} name={item.name} population={item.population} terrain={item.terrain} />
            ))}
        </div>
    );
}