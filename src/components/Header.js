import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1 className="Header__name">Frinder</h1>
      <div>{props.dropdown}</div>
    </div>
  );
}
//<Dropdown onSignUpModalShow={props.onSignUpModalShow} onSignInModalShow={props.onSignInModalShow} />
