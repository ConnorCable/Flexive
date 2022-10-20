import "./App.css";
import "bulma/css/bulma.min.css";
import Nav from "./Nav";
import Card from "./Card";
import Propertybar from "./PropertyBar";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";

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

function App() {
  const [companiesState, setCompanies] = useState(companies);
  const [companyToShow, setCompanyToShow] = useState(null);
  const showModal = (company) => setCompanyToShow(company);
  const hideModal = () => setCompanyToShow(null);

  const alphasort = () => {
    setCompanies(
      [...companiesState].sort((a, b) => a.name.localeCompare(b.name))
    )
  }

  const lowsort = () =>{
    setCompanies(
      [...companiesState].sort((a, b) => (a.amount > b.amount) ? 1 : -1)
    )

  }
  const highsort = () =>{
    setCompanies(
      [...companiesState].sort((a, b) => (a.amount > b.amount) ? 1 : -1).reverse()
    )

  }

  return (
    <div className="fullscreen">
      <Nav />
      <div className="container px-3" id="cardholder">
        <Propertybar alphasort={alphasort} lowsort={lowsort} highsort={highsort}/>
        <div className="columns is-multiline">
          {companiesState.map(function (company) {
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
        {companyToShow && (
          <Modal
            show={companyToShow}
            company={companyToShow}
            onClose={hideModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
