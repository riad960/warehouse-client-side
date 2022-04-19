import React, { useRef, useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Reg.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

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
  const [errors, setErrors] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
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

    if (password === retypedPassword) {
      createUserWithEmailAndPassword(email, password);
      navigate("/");
    } else {
      setErrors("Password Should be matched");
    }
  };

  return (
    <div className="reg ">
      <h4 className="text-primary fw-bold text-center">Registration</h4>
      <form onSubmit={handleSubmit} className="shadow-3 px-3 py-3">
        <MDBInput
          className="mb-4"
          type="text"
          id="form1Example4"
          label="Full Name"
          required
        />
        <MDBInput
          onBlur={emailOnblur}
          className="mb-4"
          type="email"
          id="form1Example7"
          label="Email address"
          required
        />

        <MDBInput
          onBlur={handlePass}
          className="mb-4"
          type="password"
          id="form1Example9"
          label="Password"
          required
        />
        <MDBInput
          onBlur={handleRetypedPass}
          className="mb-4"
          type="password"
          id="form1Example4"
          label="Retype Password"
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
              Already a user ?
            </p>
          </MDBCol>
        </MDBRow>
        <p className="text-danger">{errors}</p>
        <MDBBtn type="submit" block>
          Sign up
        </MDBBtn>
      </form>
    </div>
  );
}
