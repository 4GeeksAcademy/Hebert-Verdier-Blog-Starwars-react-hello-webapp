import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardPlanet = ({ id, name, climate, population, image}) => {
    const { store, actions } = useContext(Context);

    function bookmarkExist(name) {
        for (const favorite in store.favoritesList) {
            // console.log(store.favoritesList[favorite]);
            if (store.favoritesList[favorite].name == name) {
                console.log(true);
                return true;
            }
            else {
                console.log(false);
                return false;
            }
        }
    }
    return (
        <div className="card bg-transparent" style={{ width: '18rem', flex: 'none', margin: '10px' }}>
            <img src={image} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title text-white">{name}</h5>
                <p className="card-text text-white">Population: <strong>{population}</strong></p>
                <p className="card-text text-white">Climate: <strong>{climate}</strong></p>
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