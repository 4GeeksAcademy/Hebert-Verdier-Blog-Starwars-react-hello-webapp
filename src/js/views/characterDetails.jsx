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
    return (
        <div>
            <div className="row">
                {/* <div className="col-6"> */}
                <img className="col-4" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="..." />
                <h2 className="col-8">{store.character.name}</h2>
            </div>
            <div className="row">
                {/* <div className="col-2"> */}
                <p className="col-2">Name: {store.character.name}</p>
                <p className="col-2">Birth year: {store.character.birth_year}</p>
                <p className="col-2">Gender: {store.character.gender}</p>
                <p className="col-2">Height: {store.character.height}</p>
                <p className="col-2">Skin color: {store.character.skin_color}</p>
                <p className="col-2">Eye color: {store.character.eye_color}</p>
                {/* </div> */}
            </div>
            <Link className="btn btn-primary" to={"/"}>Back to list</Link>
        </div>
    );
}