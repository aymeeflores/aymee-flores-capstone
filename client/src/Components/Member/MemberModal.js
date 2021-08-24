import Modal from "react-bootstrap/Modal";
import React from "react";
import { Button } from "react-bootstrap";
import Constants from "../../constants";

function MyVerticallyCenteredModal(props) {
  console.log(props.user);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.user?.name}'s Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.user && (
          <div className="d-flex">
            <div>
              <img src={`${Constants.API_URL}/${props.user?.avatar}`} alt="" />
            </div>
            <div className="ms-3">
              <div>
                Hi my name is: {props.user?.name}
                and i like to: {props.user?.likes}
              </div>
              <div>
                Iam available from {props.user.available_in}
                to {props.user.available_out}
              </div>
              <div>Contact me any time at: {props.user.email}</div>
            </div>
          </div>
        )}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
