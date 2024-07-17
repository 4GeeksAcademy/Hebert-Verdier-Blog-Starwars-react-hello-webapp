import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const PlanetDetails = () => {
    let { id } = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getDetailsPlanet(id);
    }, [])
    return (
        <div className="container bg-black m-0">
            <div class="card mb-3 bg-black m-0" style={{ maxWidth: '1000px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        {id == 1 ?
                            <img src={`https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png`} className="card-img-top" alt="..." />
                            :
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
                        }
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 className="text-white pb-3">{store.planet.name}</h2>
                            <p className="text-white">Name: {store.planet.name}</p>
                            <p className="text-white"> Climate: {store.planet.climate}</p>
                            <p className="text-white">Population: {store.planet.population}</p>
                            <p className="text-white">Orbital Period: {store.planet.orbital_period}</p>
                            <p className="text-white">Rotation Period: {store.planet.rotation_period}</p>
                            <p className="text-white">Diameter: {store.planet.diameter}</p>
                        </div>
                        <div className="d-flex justify-content-end  mt-5">
                            <Link className="btn btn-primary text-white m-0" to={"/"}>Back to list</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <div className="row">
                    <div className="col-6">
                        {id == 1 ?
                            <img src={`https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png`} className="card-img-top" alt="..." />
                            :
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
                        }
                        <h2>{store.planet.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p>Name: {store.planet.name}</p>
                        <p>Climate: {store.planet.climate}</p>
                        <p>Population: {store.planet.population}</p>
                        <p>Orbital Period: {store.planet.orbital_period}</p>
                        <p>Rotation Period: {store.planet.rotation_period}</p>
                        <p>Diameter: {store.planet.diameter}</p>
                    </div>
                </div>
                <Link className="btn btn-primary" to={"/"}>Back to list</Link>
            </div> */}
        </div>
    );
}