import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingInput from "./FloatingInput";

export default function SignInModal(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>Please fill info below to sign in your account</Modal.Header>
      <Modal.Body>
        <FloatingInput name="Email" type="email" />
        <FloatingInput name="Password" type="password" />
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
