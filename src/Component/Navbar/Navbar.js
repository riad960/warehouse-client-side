import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
function Navbar({ user }) {
  const [showBasic, setShowBasic] = useState(false);

  const navigate = useNavigate();
  const loginHandle = (e) => {
    e.preventDefault();
    navigate("/registration");
  };
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <MDBNavbar expand="lg" light bgColor="light" className="fixed-top ">
      <MDBContainer fluid>
        <NavLink
          to="/"
          className="fw-bold  mr-4 my-1 "
          style={{ fontSize: "1.5rem" }}
        >
          Roni Travel Agency
        </NavLink>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="justify-content-center align-items-center mb-2  mb-lg-0">
            <Link className="p-3 text-dark fw-bold" to="/#services">
              SERVICES
            </Link>
            <Link className="p-3 text-dark fw-bold" to="/blog">
              BLOG
            </Link>
            <Link
              className="p-3 text-dark fw-bold text-left text-start"
              to="/about"
            >
              ABOUT
            </Link>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            {!user ? (
              <MDBBtn color="primary" onClick={loginHandle}>
                Login
              </MDBBtn>
            ) : (
              <MDBBtn color="danger" rounded onClick={handleSignOut}>
                Logout
              </MDBBtn>
            )}
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
