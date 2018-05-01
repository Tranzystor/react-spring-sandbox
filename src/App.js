import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShiftMain from "./shift/ShiftMain";
import AppWithModal from "./portalAnimated/AppWithModal";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ShiftMain /> */}
        <AppWithModal />
      </div>
    );
  }
}

export default App;
