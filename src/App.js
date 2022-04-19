import React, { useEffect, useState } from "react";
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
import Blogs from "./Component/Blogs/Blogs";
import Login from "./Component/Registration/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import getUser from "./Component/Customhook/getUser";
import About from "./Component/About/About";
function App() {
  const user = getUser();

  return (
    <div className="">
      <Navbar user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/#services" element={<Home />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blogs />} />
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
