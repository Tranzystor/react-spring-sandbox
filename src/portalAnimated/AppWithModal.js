import React, { Component } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const ModalBody = styled.div`
  background: azure;
`;

class AppWithModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    console.log("handle show");
    this.setState({ showModal: true });
  }

  handleHide() {
    console.log("handle hide");
    this.setState({ showModal: false });
  }

  render() {
    const modalBody = (
      <ModalBody>
        <div>
          With a portal, we can render content into a different part of the DOM,
          as if it were any other React child.
        </div>
        This is being rendered inside the #modal-container div.
        <button onClick={this.handleHide}>Hide modal</button>
      </ModalBody>
    );

    console.log("showModal: " + this.state.showModal);
    return (
      <div>
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        <Modal isVisible={this.state.showModal}>{modalBody}</Modal>
      </div>
    );
  }
}

export default AppWithModal;
