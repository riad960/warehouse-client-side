import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import "./index.css";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import NotFound from "./Component/NotFound/NotFound";
import Registration from "./Component/Registration/Registration";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Checkout from "./Component/Checkout/Checkout";
function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
