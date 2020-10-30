import React from 'react';
import Restaurants from "./components/contacts/Restaurants";
import Navbar from "./components/elements/Navbar";
import "./styles/App.scss";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddRestaurant from "./components/contacts/AddRestaurant";
import EditRestaurant from "./components/contacts/EditRestaurant";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Navbar />
        <div className="container">
          <div className="py-3">
            <Switch>
              <Route exact path="/" component={Restaurants} />
              <Route exact path="/restaurants/add" component={AddRestaurant} />
              <Route exact path="/restaurants/edit/:id" component={EditRestaurant} />
            </Switch>
          </div>
        </div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
