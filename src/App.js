import React, { Component } from "react";
import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Navya">
          <p>This is Navya.</p>
        </Greet>
        <Greet name="Divya">
          <button>Click here</button>
        </Greet>
        <Greet name="Vamsi"></Greet>
        <Welcome name="Nav"></Welcome>
        <Welcome name="Div"></Welcome>
        <Welcome name="Vam"></Welcome>
      </div>
    );
  }
}

export default App;
