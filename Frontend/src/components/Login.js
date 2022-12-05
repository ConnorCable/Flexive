import React, { useEffect, useState } from "react";
import { useLocalState } from "../util/useLocalStorage";
import {Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [data, setData] = useLocalState({}, "data");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // TODO : Make login form work

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jwt || !data) {
      fetch("/api/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => Promise.all([response.json(), response.headers]))
        .then(([body, headers]) => {
          setJwt(headers.get("authorization"), setData(body));
        });
      navigate("/profile");
    } else if (jwt && data) {
      navigate("/profile");
    }
  };

  if (jwt && data) {
    navigate("/profile");
  }

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form className="box" onSubmit={handleSubmit}>
                <div className="title has-text-centered has-text-grey-darker">
                  Login
                </div>

                <div className="field">
                  <label for="" className="label">
                    Username
                  </label>
                  <div className="control">
                    <input
                      type="username"
                      placeholder="e.g. bobsmith"
                      className="input"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label for="" className="label">
                    Password
                  </label>
                  <div className="control">
                    <input
                      type="password"
                      placeholder="*******"
                      className="input"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <button className="button is-success" type="submit">
                    Login
                  </button>
                  <button className="button is-primary is-light ml-1">
                  <Link to="/register">Sign Up</Link>
                </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
