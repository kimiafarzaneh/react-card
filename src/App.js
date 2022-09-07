import Card from "./components/card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const profileData = async () => {
      let userData;
      try {
        const res = await axios.get("https://randomuser.me/api/?results=10");
        userData = res.data;
      } catch (error) {
        console.log(error);
      }

      setUsers(userData.results);
    };
    profileData();
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <Card key={user.id.value} userData={user} />
      ))}
    </div>
  );
}

export default App;

