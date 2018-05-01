import React, { Component } from "react";
import styled from "styled-components";
import { Transition, animated } from "react-spring";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  background: blue;
  width: 100px;
`;

const Year = styled(animated.div)`
  width: 100px;
  height: 100px;
  background: yellow;
`;

class ShiftMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: 2017,
      items: [{ id: 2017 }]
    };
  }

  onClick = () => {
    let newItems = this.state.items.slice();
    newItems.shift();
    newItems.push({ id: this.state.currentYear + 1 });
    this.setState({
      currentYear: this.state.currentYear + 1,
      items: newItems
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Transition
            keys={this.state.items.map(item => item.id)}
            from={{ opacity: 1, width: 0 }}
            enter={{ opacity: 1, width: 100 }}
            leave={{ opacity: 1, width: 0 }}
          >
            {this.state.items.map(item => styles => (
              <Year style={styles}>{item.id}</Year>
            ))}
          </Transition>
        </Container>
        <button onClick={this.onClick}>toggle</button>
      </div>
    );
  }
}

export default ShiftMain;
