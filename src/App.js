import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShiftMain from "./shift/ShiftMain";
import AppWithModal from "./portalAnimated/AppWithModal";
import RightPanelAnimatedMain from "./rightPanelAnimated/RightPanelAnimatedMain";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ShiftMain /> */}
        {/* <AppWithModal /> */}
        <RightPanelAnimatedMain />
      </div>
    );
  }
}

export default App;
