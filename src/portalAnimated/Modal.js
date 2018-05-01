import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Transition } from "react-spring";

const modalRoot = document.getElementById("modal-root");

const ModalStyle = styled.div`
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

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    console.log("modal: " + this.props.isVisible);
    const items = this.props.isVisible ? ["item1"] : [];

    const children = (
      <Transition
        keys={items}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {items.map(item => styles => (
          <ModalStyle style={styles}>{this.props.children}</ModalStyle>
        ))}
      </Transition>
    );

    // const children = (
    //   <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    //     {styles => {
    //       if (this.props.isVisible) {
    //         return (
    //           <ModalStyle style={styles}>{this.props.children}</ModalStyle>
    //         );
    //       }
    //       return <ModalStyle style={styles} />;
    //     }}
    //   </Spring>
    // );

    return ReactDOM.createPortal(children, this.el);
  }
}

export default Modal;
