import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const FavoriteItem = ({ name }) => {
    const { store, actions } = useContext(Context);

    return (
            <li>
                <a className="dropdown-item" href="#">
                    {name}
                    <i onClick={() => actions.addFavoritesList(name)} className="fa fa-trash"></i>
                </a>
            </li>
    );
}