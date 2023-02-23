import "./Profile.css";
import me from "../images/me.jpg";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Profile() {

  
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <div className="Profile__container container">
        <div className="m-4">
          <img style={{ maxHeight: "60%", maxWidth: "auto" }} src={me} className=" rounded" />
          <h3 className="mt-5">{currentUser.name}</h3>
          <h6 className="mt-5">Change profile photo</h6>
        </div>
        <div style={{ backgroundColor: "transparent", height: "85%" }} className="container rounded m-4">
          <ul className="list-group list-group-item-secondary " style={{ textAlign: "start" }}>
            <li className="list-group-item">Age: {currentUser.age}</li>
            <li className="list-group-item">Gender: {currentUser.gender}</li>
            <li className="list-group-item">About me: {currentUser.about}</li>
            <li className="list-group-item">My friends</li>
          </ul>
        </div>
      </div>
    </>
  );
}
