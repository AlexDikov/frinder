import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingInput from "./FloatingInput";

export default function SignUpModal(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onHide={props.onHide}>
        Please fill info below to create new account
      </Modal.Header>
      <Modal.Body>
        <FloatingInput name="Email" id="userEmail" type="email" />
        <FloatingInput name="Create password" id="userPassword" />
        <FloatingInput name="Your name" id="userName" />
        <FloatingInput name="Date of birth" type="date" id="userBirth" />
        <select className="form-control form-control-sm mb-3">
          <option>Female</option>
          <option>Male</option>
        </select>
        <FloatingInput name="Place photo" type="file" id="userPhoto" />
        <FloatingInput name="Tell about yourself" type="textarea" id="userAbout" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Submit</Button>
      </Modal.Footer>
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
