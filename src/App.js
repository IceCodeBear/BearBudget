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
            </p>
          <Navbar/>
        </header>
      </div>
    );
  }
}

export default App;
