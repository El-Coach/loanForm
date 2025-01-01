import "./Modal.css";

function Modal({ isVisible, errMassage = null }) {
  if (isVisible) {
    //////////////component\\\\\\\\\\\\\\\\\\\\\\\\\
    return (
      <div className="Modal">
        <div className="content">
          <h1
            style={{
              color: errMassage ? "rgba(255, 0, 0, 0.836)" : "rgb(0, 128, 0)",
            }}
          >
            {errMassage != null
              ? errMassage
              : "the foem hase been submitted successfully !"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
