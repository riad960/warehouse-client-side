import React, { useRef, useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Reg.css";
import { useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import getUser from "../Customhook/getUser";
export default function App() {
  const navigate = useNavigate();
  const redirectToLogin = (e) => {
    e.preventDefault();
    navigate("/registration");
  };
  // declaring variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState("");

  // click handler mail
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  // click handler pass
  const emailOnblur = (e) => {
    setEmail(e.target.value);
  };
  const [signInWithEmailAndPassword, userLogged, loading, Mailerror] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
    if (!userLogged) {
      navigate("/checkout");
    }
    navigate("/");
  };
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const handleGoogle = (e) => {
    e.preventDefault();

    signInWithGoogle();

    if (user2) {
      navigate("/checkout");
    }
  };
  return (
    <div className="reg ">
      <h4 className="text-primary fw-bold text-center">Log in</h4>
      <form onSubmit={handleSubmit} className="shadow-3 px-3 py-3">
        <MDBInput
          onBlur={emailOnblur}
          className="mb-4"
          type="email"
          id="form1Example3"
          label="Email address"
          required
        />

        <MDBInput
          onBlur={handlePass}
          className="mb-4"
          type="password"
          id="form1Example2"
          label="Password"
          required
        />

        <MDBRow className="mb-4">
          <MDBCol className="d-flex justify-content-center">
            <MDBCheckbox
              id="form1Example3"
              label="Remember me"
              defaultChecked
            />
          </MDBCol>
          <MDBCol>
            <p
              className="text-primary fw-bold"
              style={{ cursor: "pointer" }}
              onClick={redirectToLogin}
            >
              New user ?
            </p>
          </MDBCol>
        </MDBRow>
        <p className="text-danger">{errors}</p>
        <MDBBtn type="submit" block>
          Sign In
        </MDBBtn>
        <MDBBtn color="dark" type="submit" block onClick={handleGoogle}>
          Sign in using google
        </MDBBtn>
      </form>
    </div>
  );
}
