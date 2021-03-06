import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Transition } from "react-spring";

const modalRoot = document.getElementById("modal-root");

const ModalBackgroundStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class AnimatedModal extends Component {
  render() {
    const items = this.props.isVisible ? ["modal"] : [];
    const children = (
      <Transition
        keys={items}
        from={{ opacity: 0, scale: 0.7 }}
        enter={{ opacity: 1, scale: 1 }}
        leave={{ opacity: 0, scale: 0.7 }}
      >
        {items.map(item => styles => {
          const { scale, ...rest } = styles;
          return (
            <ModalBackgroundStyle style={rest}>
              <div style={{ transform: `scale(${scale})` }}>
                {this.props.children}
              </div>
            </ModalBackgroundStyle>
          );
        })}
      </Transition>
    );

    return ReactDOM.createPortal(children, modalRoot);
  }
}

export default AnimatedModal;
