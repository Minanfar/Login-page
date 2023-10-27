import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

function Dashboard() {
  const { user, login } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (response.ok) {
          const data = await response.json();
          login(data); 
        } else {
          console.warn("Response not okay");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>You are in the dashboard</p>
      <h1>Welcome, {user.username}</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Dashboard;
