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
        <div className="container bg-black m-0">
            <div class="card m-0 bg-black" style={{ maxWidth: '1000px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={store.character.image} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 className="text-white pb-3">{store.character.name}</h2>
                            <p className="text-white">Name: {store.character.name}</p>
                            <p className="text-white">Birth year: {store.character.birth_year}</p>
                            <p className="text-white">Gender: {store.character.gender}</p>
                            <p className="text-white">Height: {store.character.height}</p>
                            <p className="text-white">Skin color: {store.character.skin_color}</p>
                            <p className="text-white">Eye color: {store.character.eye_color}</p>
                        </div>
                        <div className="d-flex justify-content-end  mt-5">
                            <Link className="btn btn-primary text-white m-0" to={"/"}>Back to list</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-6">
                <img className="col-4" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="..." />
                <h2 className="col-8">{store.character.name}</h2>
            </div>
            <div className="row">
                <div className="col-2">
                <p className="col-2">Name: {store.character.name}</p>
                <p className="col-2">Birth year: {store.character.birth_year}</p>
                <p className="col-2">Gender: {store.character.gender}</p>
                <p className="col-2">Height: {store.character.height}</p>
                <p className="col-2">Skin color: {store.character.skin_color}</p>
                <p className="col-2">Eye color: {store.character.eye_color}</p>
                </div>
            </div>
        </div> */}
        </div>

    );
}

