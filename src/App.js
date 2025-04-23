import React from 'react'
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

/* learning code below */
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'boy',
  lastName: 'fren'
};
/* learning code ends */

export default function App() {
  return (
      <Router>
        <Switch>
          {/*<Route exact path="/" component={HomePage}></Route>
          <Route path="/:id" component={UserPage} />*/}

          <Switch>
            <Route path="/MyRecipes">
              <MyRecipes />
            </Route>
            <Route path="/WhatsinmyKitchen">
              <WhatsinmyKitchen />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>

        </Switch>
      </Router>
  )
}


function Home() {
  const element = (
      <Router>
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
              <button className="center_button">
                <Link to="/MyRecipes">MyRecipes</Link>
                </button>
            </div>
            <div className="button_2">
              <button className="center_button"> What's in My Kitchen?</button>
            </div>
            <div className="button_3">
              <button className="center_button"> Make a Grocery List</button>
            </div>
            <div className="button_4">
              <button className="center_button"> My Meal Plan</button>
            </div>
          </main>
          <footer>
            <div className="back_button">
              <button className="button"> Help</button>
            </div>
            <div className="exit_button">
              <button className="button"> Settings</button>
            </div>
          </footer>
        </div>

        <Switch>
          <Route path="/MyRecipes">
            <MyRecipes />
          </Route>
          <Route path="/WhatsinmyKitchen">
            <WhatsinmyKitchen />
          </Route>
          <Route path="/MakeaGroceryList">
            <MakeaGroceryList />
          </Route>
          <Route path="/MyMealPlan">
            <MyMealPlan />
          </Route>
        </Switch>
      </Router>
  );
  return element
}

function MyRecipes() {
  return <h2>myrecipes</h2>;
}
function WhatsinmyKitchen() {
  return <h2>whats in kitchen</h2>;
}
function MakeaGroceryList() {
  return <h2>make list</h2>;
}
function MyMealPlan() {
  return <h2>meal plan</h2>;
}
function Help() {
  return <h2>help</h2>;
}
function Settings() {
  return <h2>settings</h2>;
}
