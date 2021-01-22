import React from "react";
import {Link} from "react-router-dom";

export default function HomePage() {

    return (
        <div className="parent">
            <header>
                <div className="back_button">
                    <button className="button"> Back</button>
                </div>
                <h1>Welcome to [App Name]!</h1>
                <div className="exit_button">
                    <button className="button" id="closeWindow"> Exit</button>
                </div>
            </header>
            <main>
                <div className="button_1">
                    <Link to="/MyRecipes" button className="center_button">My Recipes</Link>
                </div>
                <div className="button_2">
                    <Link to="/WhatsinmyKitchen" button className="center_button">What's in My Kitchen?</Link>
                </div>
                <div className="button_3">
                    <Link to="/MakeaGroceryList" button className="center_button">Make a Grocery List</Link>
                </div>
                <div className="button_4">
                    <Link to="/MyMealPlan" button className="center_button">My Meal Plan</Link>
                </div>
            </main>
            <footer>
                <div className="back_button">
                    <Link to="/HelpPage" button className="center_button">Help</Link>
                </div>
                <div className="exit_button">
                    <Link to="/SettingsPage" button className="center_button">Settings</Link>
                </div>
            </footer>
        </div>

        /*<div className="container">

            <h1>Hey from HomePage</h1>

            <p>
                <Link to="/your desired link">Your desired link.</Link>
            </p>

        </div>*/

    );

}