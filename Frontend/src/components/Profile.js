import "./Profile.css";
import "bulma/css/bulma.min.css";
import Nav from "./Nav";
import Card from "./Card";
import Propertybar from "./PropertyBar";
import Modal from "./Modal";
import AddInv from "./AddInvestment";
import React, { useState, useEffect } from "react";
import { useLocalState } from "../util/useLocalStorage";
import { useNavigate } from "react-router-dom";

// Investment structure:
// Name, ticker name, amount invested, description

// query structure:
/*
  returned as an array
  [
    {
      name: "Microsoft", ticker: "MSFT", description: "tech company"
    }
  ]


*/

const companies = [
  {
    key: 0,
    name: "Microsoft",
    ticker: "MSFT",
    amount: 100,
    description: "Tech Company",
  },
  {
    key: 1,
    name: "Twitter",
    ticker: "TWTR",
    amount: 100,
    description: "Tweet Company",
  },
  {
    key: 2,
    name: "Spotify",
    ticker: "SPOT",
    amount: 100,
    description: "Music Company",
  },
  {
    key: 3,
    name: "Spotify",
    ticker: "SPOT",
    amount: 100,
    description: "Music Company",
  },
  {
    key: 4,
    name: "Spotify",
    ticker: "SPOT",
    amount: 100,
    description: "Music Company",
  },
  {
    key: 5,
    name: "Spotify",
    ticker: "SPOT",
    amount: 100,
    description: "Music Company",
  },
  {
    key: 6,
    name: "Palantir",
    ticker: "SPOT",
    amount: 100,
    description: "Music Company",
  },
  {
    key: 7,
    name: "Linkedin",
    ticker: "SPOT",
    amount: 100,
    description: "Music Company",
  },
  {
    key: 8,
    name: "Gertrude",
    ticker: "SPOT",
    amount: 1200,
    description: "Music Company",
  },
  {
    key: 9,
    name: "Alphabet",
    ticker: "SPOT",
    amount: 1123150,
    description: "Music Company",
  },
];

function Profile() {
  const [companiesState, setCompanies] = useState(null);
  const [companyToShow, setCompanyToShow] = useState(null);
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [data, setData] = useLocalState({}, "data");
  const [showCreate, setShowCreate] = useState(false);

  const showModal = (company) => setCompanyToShow(company);
  const hideModal = () => setCompanyToShow(null);
  const navigate = useNavigate();

  const alphasort = () => {
    setCompanies(
      [...companiesState].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const lowsort = () => {
    setCompanies(
      [...companiesState].sort((a, b) => (a.amount > b.amount ? 1 : -1))
    );
  };
  const highsort = () => {
    setCompanies(
      [...companiesState]
        .sort((a, b) => (a.amount > b.amount ? 1 : -1))
        .reverse()
    );
  };

  useEffect(() => {
    console.log("Get Request Ran");
    fetch("/api/investments", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) return response.json();
      })
      .then((data) => {
        setCompanies(data);
      });
    console.log(companiesState);
  }, []);

  const createInvestment = (e) => {
    console.log("create investment");

    fetch("/api/investments", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      method: "POST",
      body: JSON.stringify({
        /*
          "description": newInvestment["description"],
          "name": newInvestment["invname"],
          "ticker": newInvestment["ticker"],
          */
      }),
    })
      .then((response) => {
        if (response.status === 200) console.log(response);
      })
      .then((data) => {
        console.log(data);
      });
  };

  if (!jwt || !data) {
    navigate("/login");
  }

  return (
    <div className="fullscreen ">
      <Nav />
      <div className="columns is-multiline">
        <div className="container column px-3 py-4" id="cardholder">
          <Propertybar
            alphasort={alphasort}
            lowsort={lowsort}
            highsort={highsort}
            createInvestment={createInvestment}
          />
          <div className="columns is-multiline">
            {companiesState &&
              companiesState.map(function (company) {
                return (
                  <div
                    className="column is-one-fifth"
                    key={company.id}
                    onClick={() => showModal(company)}
                  >
                    <Card company={company} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {companyToShow && (
        <Modal
          show={companyToShow}
          company={companyToShow}
          onClose={hideModal}
        />
      )}
    </div>
  );
}

export default Profile;
