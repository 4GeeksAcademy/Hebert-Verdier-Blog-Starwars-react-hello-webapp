import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardCharacter } from "./cardCharacter.jsx";
import "../../styles/home.css";

export const ContenedorCharacters = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className={store.charactersList && "card-container card-group"}>
            <div className={store.charactersList && "card-container-child d-flex flex-row"}>
                {store.charactersList ? store.charactersList.length == 0 ? (<div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>) : store.charactersList.map((item, index) => (
                    <CardCharacter key={index} id={item.id} name={item.name} gender={item.gender} height={item.height} eyeColor={item.eye_color} skin_color={item.skin_color} image={item.image} />
                )) :
                    <p>No se encontraron personajes</p>
                }
            </div>
        </div>
    );
}