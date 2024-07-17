import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardCharacter = ({ id, name, gender, eyeColor, hairColor }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card" style={{ width: '18rem', flex: 'none', margin: '10px' }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">gender: <strong>{gender}</strong></p>
                <p className="card-text">Eye color: <strong>{eyeColor}</strong></p>
                <p className="card-text">Hair color: <strong>{hairColor}</strong></p>
                <div className="d-flex justify-content-between">
                    <Link className="btn btn-primary" to={"/characterDetails/" + id}>Learn More!</Link>
                    <button type="button" onClick={() => actions.addFavoritesList(name)} className="btn btn-primary">
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}