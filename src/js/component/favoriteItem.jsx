import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";

export const FavoriteItem = ({ name }) => {
    const { store, actions } = useContext(Context);

    return (
        <li>
            <a className="dropdown-item d-flex justify-content-between d-flex align-items-center" href="#">
                {name}
                <i onClick={'() => actions.getFavorites()'} className="fa fa-trash"></i>
            </a>
        </li>
    );
}