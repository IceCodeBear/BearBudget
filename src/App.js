import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/homepage/home";
import {
  HSA,
  RothIRA,
  Budget101,
  Roth401k,
  RA401k,
  IndexFunds,
  SavingsAccount,
  CreditScore
} from "./components/articles";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Calculatorcomp from "./components/calculator/calculatorcomp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/budget101" component={Budget101} />
              <Route path="/hsa" component={HSA} />
              <Route path="/roth401k" component={Roth401k} />
              <Route path="/rothira" component={RothIRA} />
              <Route path="/401k" component={RA401k} />
              <Route path="/indexfunds" component={IndexFunds} />
              <Route path="/savingsaccount" component={SavingsAccount} />
              <Route path="/creditscore"component={CreditScore} />
              <Route path="/calculator" component={Calculatorcomp} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
