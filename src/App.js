import Card from "./components/card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import ErrorNot from "./components/errorNot";

function App() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const profileData = async () => {
      let userData;
      try {
        const res = await axios.get("https://randomuser.me/api/?results=10");
        userData = res.data;
      } catch (error) {
        if (error.message) {
          setErrorMessage(error.message);
        }
      }

      if (userData) {
        setUsers(userData.results);
      }
    };
    profileData();
  }, []);

  return (
    <div className="container">
      {errorMessage && <ErrorNot message={errorMessage} />}
      {users.map((user) => (
        <Card key={user.id.value} userData={user} />
      ))}
    </div>
  );
}

export default App;

