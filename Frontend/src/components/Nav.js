import "bulma/css/bulma.min.css";
import "./Components.css";
import { Link } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";
import { getWallet } from "../util/api";
import { useState } from "react";

function Nav() {
  const [data, setData] = useLocalState({}, "data");
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [wallet, setWallet] = useState(0)
  

  getWallet(jwt, data["id"]).then(result => setWallet(result))

  let linkButton;

  if (window.location.pathname === "/profile") {
    linkButton = `/account`;
  } else {
    linkButton = "/profile";
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-start">
        <div className="navbar-item company">Flexive</div>
      </div>

      <div className="navbar-end">
        <div>Wallet: {wallet}</div>
        <div className="button is-primary mr-2 mt-3">
          <Link className="has-text-white" to={linkButton}>
            <strong>{linkButton === "/account" ? "Wallet" : "Profile"}</strong>
          </Link>
        </div>
        <div className="button is-danger mr-2 mt-3">
          <strong>Log Out</strong>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
