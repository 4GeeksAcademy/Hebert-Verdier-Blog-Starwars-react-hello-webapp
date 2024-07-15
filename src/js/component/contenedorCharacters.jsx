import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardCharacter } from "./cardCharacter.jsx";

export const ContenedorCharacters = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="row">
            {store.charactersList.map((item, index) => (
                <CardCharacter key={index} name={item.name} gender={item.gender} eyeColor={item.eye_color} hairColor={item.hair_color} />
            ))}
        </div>
    );
}