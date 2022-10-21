import React, {useEffect, useState } from "react";
import { useLocalState } from "../util/useLocalStorage";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
const Login = () => {

  const [jwt, setJwt] = useLocalState("", "jwt")
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  // TODO : Make login form work


  useEffect(() => {
    if(!jwt){
    const reqBody = {
      username: "Connor",
      password: "password",
    };

    fetch("/api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => Promise.all([response.json(), response.headers]))
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"))
      })
    }
  }, [])

  

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" className="box">
                <div className="title has-text-centered has-text-grey-darker">
                  Login
                </div>
                <div className="field">
                  <label for="" className="label">
                    Email
                  </label>
                  <div className="control">
                    <input
                      type="email"
                      placeholder="e.g. bobsmith@gmail.com"
                      className="input"
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
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <button className="button is-success">Login</button>
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
