import React from "react";
import {
    useParams,
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function MyRecipes() {

    let { id } = useParams();

    return (
        <div className="container">
            <h1>Hello there user {id}</h1>

            <p>This is your awesome MyRecipes page</p>
        </div>
    );

}