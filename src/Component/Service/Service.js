import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBBadge,
} from "mdb-react-ui-kit";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Service({ price, name, des, img }) {
  const navigate = useNavigate();
  const checkOut = () => {
    navigate("/checkOut");
  };
  return (
    <MDBCard style={{ maxWidth: "22rem" }}>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage src={img} fluid alt="..." />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{name} </MDBCardTitle>
        <MDBBadge
          className="px-3 py-2  rounded-pill shadow-2 my-2 fw-bold"
          color="warning "
        >
          {price}$
        </MDBBadge>
        <MDBCardText style={{ color: "#6b7280", fontWeight: "400" }}>
          {des}
        </MDBCardText>
        <MDBBtn href="#" className="text-center" onClick={checkOut}>
          Buy Now
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
