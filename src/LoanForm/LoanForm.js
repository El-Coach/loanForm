import "./LoanForm.css";
import Modal from "../Modal/Modal";
import { useState } from "react";

function LoanForm() {
  const [loanForm, SetLoanForm] = useState({
    name: "",
    phoneNumper: "",
    age: "",
    isEmployee: false,
    salaryRange: "lass than 500$",
  });
  const [showModal, setShowModal] = useState(false);
  const [errMassage, setErrMassage] = useState(null);
  function handleFormSupmit(event) {
    const { age } = loanForm;
    const { phoneNumper } = loanForm;
    event.preventDefault();
    if (age < 18 || age > 100 || isNaN(age)) {
      setErrMassage("the age is not allowed");
    } else if (phoneNumper.length !== 11 || isNaN(phoneNumper)) {
      setErrMassage("phone numper formate is incorrect");
    } else {
      setErrMassage(null);
    }
    setShowModal(true);
    console.log(loanForm);
  }
  function handleModalClicked() {
    if (showModal) {
      setShowModal(false);
      console.log("modalClicked");
    }
  }

  //////////////component\\\\\\\\\\\\\\\\\\\\\\\\\
  return (
    <div className="LoanForm" onClick={handleModalClicked}>
      <form action="">
        <h1>requesting a loan</h1>
        <hr />
        <label htmlFor="">name :</label>
        <input
          type="text"
          value={loanForm.name}
          onChange={(event) => {
            SetLoanForm({ ...loanForm, name: event.target.value });
          }}
        />
        <label htmlFor="">phone numper :</label>
        <input
          type="text"
          value={loanForm.phoneNumper}
          onChange={(event) => {
            SetLoanForm({ ...loanForm, phoneNumper: event.target.value });
          }}
        />
        <label htmlFor="">age :</label>
        <input
          type="text"
          value={loanForm.age}
          onChange={(event) => {
            SetLoanForm({ ...loanForm, age: event.target.value });
          }}
        />
        <label htmlFor="">are you an employee ?</label>
        <input
          type="checkbox"
          checked={loanForm.isEmployee}
          onChange={(event) => {
            SetLoanForm({ ...loanForm, isEmployee: event.target.checked });
          }}
          style={{ height: "20px" }}
        />
        <label htmlFor="">salary :</label>
        <select
          value={loanForm.salaryRange}
          onChange={(event) => {
            SetLoanForm({ ...loanForm, salaryRange: event.target.value });
          }}
        >
          <option>lass than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>
        <button
          onClick={handleFormSupmit}
          disabled={
            loanForm.name === "" ||
            loanForm.age === "" ||
            loanForm.phoneNumper === ""
          }
        >
          supmit
        </button>
      </form>
      <Modal isVisible={showModal} errMassage={errMassage} />
    </div>
  );
}

export default LoanForm;
