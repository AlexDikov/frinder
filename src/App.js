import "./App.css";
import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Main from "./components/Main";
import Profile from "./components/Profile";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";

import "bootstrap/dist/css/bootstrap.min.css";
//import "../src/styles.css";

function App() {
  const [signUpModalShow, setSignUpModalShow] = React.useState(false);
  const [signInModalShow, setSignInModalShow] = React.useState(false);

  return (
    <div className="App">
      <SignUpModal show={signUpModalShow} onHide={() => setSignUpModalShow(false)} />
      <SignInModal show={signInModalShow} onHide={() => setSignInModalShow(false)} />
      <Routes>
        <Route
          path="/"
          element={<Main onSignUpModalShow={setSignUpModalShow} onSignInModalShow={setSignInModalShow} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
