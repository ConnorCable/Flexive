import React, {useEffect, useState } from "react";
import { useLocalState } from "../util/useLocalStorage";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Profile";


const Login = () => {

  const [jwt, setJwt] = useLocalState("", "jwt")
  const [credentials, setCredentials] = useState({
      username: "",
      email: "",
      password: ""
  })



  // TODO : Make login form work

  const changeHandler = e => {
    setCredentials({...credentials,[e.target.name]:[e.target.value]});
  }

  const handleSubmit = (e) => {
    console.log(JSON.stringify(credentials))

    e.preventDefault()

    if(!jwt){
  
      fetch("/api/auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        })
      })
        .then((response) => Promise.all([response.json(), response.headers]))
        .then(([body, headers]) => {
          console.log(headers.get("authorization"))
        })
      }
  } 
  

  const {username,password} = credentials;

  

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
                      value={username}
                      onChange={changeHandler}
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
                      onChange={changeHandler}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <button className="button is-success" type="submit">Login</button>
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
