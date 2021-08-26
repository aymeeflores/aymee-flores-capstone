import "./MemberModal.scss";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Constants from "../../constants";

function MyVerticallyCenteredModal(props) {
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
            <div
              className="profilepic"
              style={{
                backgroundImage: `url(${Constants.API_URL}/${props.user?.avatar})`,
              }}
            >
              {/* <img
                src={`${Constants.API_URL}/${props.user?.avatar}`}
                alt="profile picture"
              /> */}
            </div>
            <div className="ms-3">
              <div>
                <strong>Interests:</strong>
                {props.user?.likes}
              </div>
              <div>
                <strong>I am available from</strong> {props.user.available_in}
                to {props.user.available_out}
              </div>
              <div>
                <strong>Contact me any time at:</strong> {props.user.email}
              </div>
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
