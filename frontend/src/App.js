  
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/nabvar/navbar.component";
import { Home } from "./components/home/home.component";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container-fluid">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;