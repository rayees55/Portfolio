import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

function RecommendationCard(props) {
  const [show, setShow] = useState(false);
  const { name, designation, company, message } = props.recommendation;
  var message1 = "";
  if (message.length > 35) {
    message1 = message.slice(0, 35);
    message1 += "...";
  } else message1 = message;
  return (
    <div className="col-12 col-md-4">
      <a onClick={() => setShow(true)}>
        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-text">{message1}</h4>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
          </div>
        </div>
      </a>{" "}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body closeButton>
          <div className="card-body ">
            <h4 className="card-text text-center">{message}</h4>
            <p className="card-text text-secondary text-center mb-0">{name}</p>
            <p className="card-text text-secondary text-center">
              {designation} at {company}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RecommendationCard;
