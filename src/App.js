import React from "react";
import "./App.css";
const firebase = require('firebase/app');
require('firebase/database');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      speed: 10,
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child("speed");
    speedRef.on("value", (snap) => {
      this.setState({
        speed: snap.val(),
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to BearBudget
          </p>
        </header>
      </div>
    );
  }
}

export default App;
