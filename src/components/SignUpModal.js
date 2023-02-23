import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingInput from "./FloatingInput";
import { Form } from "react-bootstrap";

export default function SignUpModal(props) {
  const [formValue, setFormValue] = useState({
    userEmail: "",
    userPassword: "",
    userName: "",
    userBirth: "",
    userGender: "",
    userPhoto: "",
    userAbout: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userEmail, userPassword, userName, userBirth, userGender, userPhoto, userAbout } = formValue;
    console.log(userEmail, userPassword, userName, userBirth, userGender, userPhoto, userAbout);
  };

  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onHide={props.onHide}>
        Please fill info below to create new account
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FloatingInput name="Email" id="userEmail" type="email" value={formValue.userEmail} onChange={handleChange} />
          <FloatingInput
            name="Create password"
            id="userPassword"
            value={formValue.userPassword}
            onChange={() => {
              handleChange();
            }}
          />
          <FloatingInput
            name="Your name"
            id="userName"
            value={formValue.userName}
            onChange={() => {
              handleChange();
            }}
          />
          <FloatingInput
            name="Date of birth"
            type="date"
            id="userBirth"
            value={formValue.userBirth}
            onChange={() => {
              handleChange();
            }}
          />
          <select
            className="form-control form-control-sm mb-3"
            id="userGender"
            value={formValue.userGender}
            onChange={() => {
              handleChange();
            }}
          >
            <option>Female</option>
            <option>Male</option>
          </select>
          <FloatingInput
            name="Place photo"
            type="file"
            id="userPhoto"
            value={formValue.userPhoto}
            onChange={() => {
              handleChange();
            }}
          />
          <FloatingInput
            name="Tell about yourself"
            type="textarea"
            id="userAbout"
            value={formValue.userAbout}
            onChange={() => {
              handleChange();
            }}
          />
          <Button
            variant="secondary"
            type="submit"
            onSubmit={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
// import "./Popup.css";
// import { Button } from "react-bootstrap";
// import Input from "./Input";

// export default function Popup(props) {
//   return (
//     <div className={`Popup__container ${props.isOpen && "Popup_opened"}`}>
//       <button className="Popup__close-btn" onClick={props.handleClose}></button>
//       <form className="form-floating">
//         <Input />
//         <Button variant="dark">Submit</Button>
//       </form>
//     </div>
//   );
// }
