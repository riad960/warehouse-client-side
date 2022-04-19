import React from "react";

function NotFound() {
  return (
    <div style={{ marginTop: "120px" }}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center fw-bold">
          <h1 className="text-danger">Page Not Found 😭😭</h1>
        </div>
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1649091633~exp=1649092233~hmac=d80e7ca0d4737ff6133b84bae3e119766afa2f66cc50a58708dd706ac0fc47b6"
            alt="hello"
            className="w-75"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
