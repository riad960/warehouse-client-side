import React, { useEffect, useState } from "react";

function UseData() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/riad960/Travel-service/main/public/fakedata.json"
    )
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return user;
}

export default UseData;
