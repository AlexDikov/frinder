import Header from "./Header";
import me from "../images/me.jpg";
import Dropdown from "./Dropdown";
import "./Profile.css";

export default function Profile(props) {
  return (
    <>
      <Header
        dropdown={
          <Dropdown
            onSignUpModalShow={props.onSignUpModalShow}
            onSignInModalShow={props.onSignInModalShow}
            title="Dikov Alex"
            btnOneTitle="Profile"
            btnTwoTitle="Sign Out"
          />
        }
      />
      <div className="Profile__container container">
        <div className="m-4">
          <img style={{ maxHeight: "60%", maxWidth: "auto" }} src={me} className=" rounded" />
          <h3 className="mt-5">Dikov Alex</h3>
        </div>
        <div style={{ backgroundColor: "rgba(266,266,266,0.6)", height: "85%" }} className="container rounded m-4">
          <ul className="list-group m-1">
            <li className="list-group-item">Name:</li>
            <li className="list-group-item">Age:</li>
            <li className="list-group-item">Gender:</li>
            <li className="list-group-item">About me:</li>
          </ul>
        </div>
      </div>
    </>
  );
}
