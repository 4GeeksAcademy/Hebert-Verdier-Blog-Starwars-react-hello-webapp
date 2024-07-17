import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardPlanet = ({ id, name, population, terrain }) => {
    const { store, actions } = useContext(Context);
    const [styles, setStyle] = useState('green');

    return (
        <div className="card" style={{ width: '18rem', flex: 'none', margin: '10px' }}>
            {id == 1 ?
                <img src={`https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png`} className="card-img-top" alt="..." />
                :
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />

            }
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Population: <strong>{population}</strong></p>
                <p className="card-text">Terrain: <strong>{terrain}</strong></p>
                <div className="d-flex justify-content-between">
                    <Link className="btn btn-primary" to={"/planetDetails/" + id}>Learn More!</Link>
                    <button type="button" onClick={() => actions.addFavoritesList(name, setStyle)} style={{ background: styles }} className={"btn btn-primary "}>
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}