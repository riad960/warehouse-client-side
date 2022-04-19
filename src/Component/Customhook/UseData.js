import React, { useEffect, useState } from "react";

function UseData() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return user;
}

export default UseData;
