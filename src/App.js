import React from 'react';
import LandingPageComp from './components/Body/LandingPageComp';
import NavigationMenu from './components/Header/NavigationMenu';
import LandingPage from './Views/LandingPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Views/Home';
function App() {
  return (
    <div>
      <Router>
      <NavigationMenu />
      <div className="p-3">
          <Switch>
          <Route exact path="/">
                <LandingPageComp />
              </Route>
            <Route exact path="/learnable">
                <Home />
              </Route>
           
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
