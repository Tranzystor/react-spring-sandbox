import React, { Component } from "react";
import styled from "styled-components";
import { Spring } from "react-spring";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: azure;
`;

const Content = styled.div`
  background: blue;
  width: 100%;
  height: 100%;
`;

const PanelContent = styled.div`
  background: green;
  position: fixed;
  right: 0;
  top: 0;
  width: 500px;
  height: 100%;
`;

class RightPanelAnimatedMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  toggle = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };

  render() {
    const toggle = this.state.isOpened;
    //better solution: https://codesandbox.io/embed/pmjomxn60s
    return (
      <Container>
        <Content>
          <button onClick={this.toggle}>toggle right panel</button>
        </Content>

        <Spring
          from={{ width: toggle ? 0 : 500 }}
          to={{ width: toggle ? 500 : 0 }}
        >
          {styles => {
            console.log(JSON.stringify(styles));
            return <PanelContent style={styles}>PANEL</PanelContent>;
          }}
        </Spring>
      </Container>
    );
  }
}

export default RightPanelAnimatedMain;
