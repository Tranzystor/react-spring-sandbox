import React, { Component } from "react";
import AnimatedModal from "./AnimatedModal";
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
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleShow}>Show modal</button>
        <AnimatedModal isVisible={this.state.showModal}>
          <ModalBody>
            <div>
              With a portal, we can render content into a different part of the
              DOM, as if it were any other React child.
            </div>
            This is being rendered inside the #modal-container div.
            <button onClick={this.handleHide}>Hide modal</button>
          </ModalBody>
        </AnimatedModal>
      </React.Fragment>
    );
  }
}

export default AppWithModal;
