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
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
export default function App() {
  const navigate = useNavigate();
  const redirectToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  // declaring variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // click handler mail
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  // click handler pass
  const emailOnblur = (e) => {
    setEmail(e.target.value);
  };
  const handleRetypedPass = (e) => {
    setRetypedPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="reg ">
      <h4 className="text-primary fw-bold text-center">Registration</h4>
      <form onSubmit={handleSubmit} className="shadow-3 px-3 py-3">
        <MDBInput
          className="mb-4"
          type="text"
          id="form1Example1"
          label="Full Name"
        />
        <MDBInput
          onBlur={emailOnblur}
          className="mb-4"
          type="email"
          id="form1Example3"
          label="Email address"
        />

        <MDBInput
          onBlur={handlePass}
          className="mb-4"
          type="password"
          id="form1Example2"
          label="Password"
        />
        <MDBInput
          onBlur={handleRetypedPass}
          className="mb-4"
          type="password"
          id="form1Example4"
          label="Retype Password"
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
            <p onClick={redirectToLogin}>Already?</p>
          </MDBCol>
        </MDBRow>

        <MDBBtn type="submit" block>
          Sign up
        </MDBBtn>
      </form>
    </div>
  );
}
