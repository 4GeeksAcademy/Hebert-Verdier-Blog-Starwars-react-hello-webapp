import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardPlanet = ({ id, name, population, terrain }) => {
    const { store, actions } = useContext(Context);

    function bookmarkExist(name) {
        if (store.favoritesList.includes(name)) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className="card bg-transparent" style={{ width: '18rem', flex: 'none', margin: '10px' }}>
            {id == 1 ?
                <img src={`https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png`} className="card-img-top" alt="..." />
                :
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />

            }
            <div className="card-body">
                <h5 className="card-title text-white">{name}</h5>
                <p className="card-text text-white">Population: <strong>{population}</strong></p>
                <p className="card-text text-white">Terrain: <strong>{terrain}</strong></p>
                <div className="d-flex justify-content-between">
                    <Link className="btn btn-primary" to={"/planetDetails/" + id}>Learn More!</Link>
                    <button type="button" onClick={() => actions.addFavoritesList(name)} className={`btn btn-primary ${bookmarkExist(name) ? "bg-danger" : "bg-success"}`}>
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}