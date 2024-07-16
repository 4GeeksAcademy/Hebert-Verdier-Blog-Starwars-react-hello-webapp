import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CharacterDetails = () => {
    let { id } = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getDetailsCharacter(id);
    }, [])
    console.log(store.character);
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <h2>{store.character.name}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <p>Name: {store.character.name}</p>
                    <p>Birth year: {store.character.birth_year}</p>
                    <p>Gender: {store.character.gender}</p>
                    <p>Height: {store.character.height}</p>
                    <p>Skin color: {store.character.skin_color}</p>
                    <p>Eye color: {store.character.eye_color}</p>
                </div>
            </div>
            <Link className="btn btn-primary" to={"/"}>Back to list</Link>
        </div>
    );
}