import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HeaderMenu(props) {
  const navigate = useNavigate();

  return (
    <DropdownButton
      id="dropdown-button-dark-example2"
      variant="secondary"
      menuVariant="dark"
      title={props.title}
      className="m-2"
    >
      <Dropdown.Item
        onClick={
          props.isLoggedIn
            ? () => {
                navigate("/profile");
              }
            : () => {
                props.onSignUpModalShow(true);
              }
        }
      >
        {props.btnOneTitle}
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        onClick={() => {
          props.onSignInModalShow(true);
        }}
      >
        {props.btnTwoTitle}
      </Dropdown.Item>
    </DropdownButton>
  );
}
