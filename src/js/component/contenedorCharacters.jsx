import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardCharacter } from "./cardCharacter.jsx";

export const ContenedorCharacters = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
                {store.charactersList.map((item, index) => (
                    <CardCharacter key={index} id={item.id} name={item.name} gender={item.gender} height={item.height} eyeColor={item.eye_color} skin_color={item.skin_color} image={item.image} />
                ))}
            </div>
        </div>

    );
}