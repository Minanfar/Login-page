import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./login.css"

function Login() {
  const { user, login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard");
    login(username, password);
    console.log(user);
    setUsername("");
    setPassword("");
  };

  return (
    <> 
    <section className="bg">
    </section>
    <div className='bg-text' >
      <h2 >Login</h2>
      <form onSubmit={handleSubmit} className="">
        <div>
          <label>Username : </label>
          <br/>
          <input
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password : </label>
          <br/>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='button' type='submit'>
          sign in
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
