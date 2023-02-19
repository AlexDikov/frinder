import "./Profile.css";
import me from "../images/me.jpg";

export default function Profile(props) {
  return (
    <>
      <div className="Profile__container container">
        <div className="m-4">
          <img style={{ maxHeight: "60%", maxWidth: "auto" }} src={me} className=" rounded" />
          <h3 className="mt-5">{props.userName}</h3>
        </div>
        <div style={{ backgroundColor: "rgba(266,266,266,0.6)", height: "85%" }} className="container rounded m-4">
          <ul className="list-group m-1">
            <li className="list-group-item">Age:{props.userAge}</li>
            <li className="list-group-item">Gender:{props.userGender}</li>
            <li className="list-group-item">About me:{props.userAbout}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
