import React from "react";

export const CardCharacter = ({ name, gender, eyeColor, hairColor }) => {

    return (
        <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">gender: {gender}</p>
                    <p className="card-text">Eye color: {eyeColor}</p>
                    <p className="card-text">Hair color: {hairColor}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}