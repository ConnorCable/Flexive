import React from "react";

const Register = () => {
  return (
    <section className="hero is-primary is-fullheight">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" className="box">
            <div className="title has-text-centered has-text-grey-darker">
              Sign Up
            </div>
            <div className="field">
              <label for="" className="label">Email</label>
              <div className="control">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input" required />
              </div>
            </div>
            <div className="field">
              <label for="" className="label">Username</label>
              <div className="control">
                <input type="username" placeholder="bobsmith" className="input" required />

              </div>
            </div>
            <div className="field">
              <label for="" className="label">Password</label>
              <div className="control">
                <input type="password" placeholder="*******" className="input" required />

              </div>
            </div>

            <div className="field">
              <button className="button is-success">
                Sign up
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

export default Register;
