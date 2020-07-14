import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/homepage/home";
import {
  CreditCards,
  RothIRA,
  Budget101,
  Roth401k,
  RA401k,
  IndexFunds,
  SavingsAccount,
  StockMarket,
  RealEstate
} from "./components/articles";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/budget101" component={Budget101} />
              <Route path="/creditcards" component={CreditCards} />
              <Route path="/roth401k" component={Roth401k} />
              <Route path="/rothira" component={RothIRA} />
              <Route path="/401k" component={RA401k} />
              <Route path="/indexfunds" component={IndexFunds} />
              <Route path="/savingsaccount" component={SavingsAccount} />
              <Route path="/stockmarket" component={StockMarket} />
              <Route path="/realestate"component={RealEstate} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
