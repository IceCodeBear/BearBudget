import React from "react";
import "./App.css";
import Navbar from './components/navbar/navbar'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <p>
              Welcome to BearBudget
              <h4>Budget The <span aria-label="bear" role="img">&#128059;</span> Necessities</h4>
            </p>
          <Navbar/>
        </header>
      </div>
    );
  }
}

export default App;
