import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";

export default function FloatingInput(props) {
  return (
    <>
      <FloatingLabel controlId={props.id} label={props.name} className="mb-3">
        <Form.Control type={props.type || "text"} placeholder="default" />
      </FloatingLabel>
    </>
  );
}
