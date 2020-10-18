import React from "react";
import LandingPageComp from "./components/Body/LandingPageComp";
import NavigationMenu from "./components/Header/NavigationMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import SoftwareDeveloper from "./Views/SoftwareDeveloper";
import ProductDesign from "./Views/ProductDesign";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
       <NavigationMenu />
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPageComp />
            </Route>
            <Route path="/learnable">
              <Home />

            </Route>
            <Route path="/1">
              <LandingPageComp />
              
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/software-developer">
              <SoftwareDeveloper />
            </Route>
            <Route path="/product-designer">
              <ProductDesign />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
