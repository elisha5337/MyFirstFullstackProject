import React, { useState } from "react";
import { Link } from "react-router";
function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  const authHandler = (e) => {
    e.preventDefault();
    if (e.target.name == "LOGIN") {
      console.log("LOGIN PAGE");
    } else {
      console.log("SIGNUP PAGE");
    }
  };
  return (
    <>
      {" "}
      <div className="text-center ">
        <h1>MY PROJECTS</h1>
      </div>
      <nav className="text-center">
        <ul className="text-center col-3 ">
          <li>
            <Link to="/quote">Quote</Link>
          </li>
          <li>
            <Link to="/todoapp">TodoApp</Link>
          </li>
        </ul>
      </nav>
      <div className="text-center">
        <p className=" ">
          <label htmlFor="E-mail">E-mail:</label>
          <input
            type="email"
            value={email}
            id="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            name=""
          />
        </p>
        <p>
          {" "}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name=""
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button
            onClick={authHandler}
            name="LOGIN"
            className="btn btn-primary"
            value="LOGIN"
          >
            LOGIN
          </button>
        </p>
        <p>
          <button
            onClick={authHandler}
            name="SIGNUP"
            className="btn btn-primary"
            value="SIGNUP"
          >
            SIGNUP
          </button>
        </p>
      </div>
      <button onClick={() => <p>email you inserted:{email}</p>}>click</button>
      <p>password you set:{password}</p>
    </>
  );
}

export default Home;
