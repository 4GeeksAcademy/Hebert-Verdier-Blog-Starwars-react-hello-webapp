import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardCharacter = ({ id, name, gender, eyeColor, skin_color, image}) => {
    const { store, actions } = useContext(Context);

    function bookmarkExist(name) {
        if (store.favoritesList.includes(name)) {
            return true;
        } else {
            return false;
        }
        //  store.favoritesList.includes(name) ?  true : false;
    }
    return (
        <div className="card bg-transparent" style={{ width: '18rem', flex: 'none', margin: '10px' }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-white">{name}</h5>
                <p className="card-text text-white">Gender: <strong>{gender}</strong></p>
                <p className="card-text text-white">Eye color: <strong>{eyeColor}</strong></p>
                <p className="card-text text-white">Skin color: <strong>{skin_color}</strong></p>
                <div className="d-flex justify-content-between">
                    <Link className="btn btn-primary" to={"/characterDetails/" + id}>Learn More!</Link>
                    <button type="button" onClick={() => actions.addFavoritesList(name)} className={`btn btn-primary ${bookmarkExist(name) ? "bg-danger" : "bg-success"}`}>
                        <i className={"fa fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

// className={`bookmarkExist(id) ? "text-danger" : "text-white"`}
