import React from "react";
import { Link } from "react-router-dom";

export const CardCharacter = ({ id, name, gender, eyeColor, hairColor }) => {
    // console.log(url[url.length - 2]);
    return (
        <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">gender: {gender}</p>
                    <p className="card-text">Eye color: {eyeColor}</p>
                    <p className="card-text">Hair color: {hairColor}</p>
                    <Link className="btn btn-primary" to={"/characterDetails/" + id}>Learn More!</Link>
                    <button type="button" className="btn btn-primary">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}