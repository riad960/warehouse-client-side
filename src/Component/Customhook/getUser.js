import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";

function getUser() {
  const [user, getUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        getUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
  });
  return user;
}

export default getUser;
