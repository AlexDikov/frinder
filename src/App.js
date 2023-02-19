import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import Chat from "./components/Chat";
import NewFriends from "./components/NewFriends";
import Map from "./components/Map";
import Events from "./components/Events";
import ProtectedRoute from "./components/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [signUpModalShow, setSignUpModalShow] = useState(false);
  const [signInModalShow, setSignInModalShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <Header onSignUpModalShow={setSignUpModalShow} onSignInModalShow={setSignInModalShow} isLoggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={loggedIn} onSignIn={setSignInModalShow}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newfriends"
          element={
            <ProtectedRoute isLoggedIn={loggedIn} onSignIn={setSignInModalShow}>
              <NewFriends />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute isLoggedIn={loggedIn} onSignIn={setSignInModalShow}>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/map"
          element={
            <ProtectedRoute isLoggedIn={loggedIn} onSignIn={setSignInModalShow}>
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute isLoggedIn={loggedIn} onSignIn={setSignInModalShow}>
              <Events />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <SignUpModal show={signUpModalShow} onHide={() => setSignUpModalShow(false)} />
      <SignInModal show={signInModalShow} onHide={() => setSignInModalShow(false)} />
    </div>
  );
}

export default App;
