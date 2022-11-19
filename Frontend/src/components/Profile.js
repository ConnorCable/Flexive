import "./Profile.css";
import "bulma/css/bulma.min.css";
import Nav from "./Nav";
import Card from "./Card";
import Propertybar from "./PropertyBar";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";
import { useLocalState } from "../util/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { getInvestments, addInvestment } from "../util/api";
import InfiniteScroll from 'react-infinite-scroll-component';

/*

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



*/




function Profile() {
  const [companiesState, setCompanies] = useState(null);
  const [visualCompanies, setVisualCompanies] = useState(null)
  const [companyToShow, setCompanyToShow] = useState(null);
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [data, setData] = useLocalState({}, "data");


  const showModal = (company) => setCompanyToShow(company);
  const hideModal = () => setCompanyToShow(null);
  const navigate = useNavigate();


  // sort functions

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

  let sorts = [alphasort,lowsort,highsort]

  
  // API Calls
  useEffect(() => {
    getInvestments(jwt).then(data => setCompanies(data))
    
  }, []);
  

  const createInvestment = (e) => {
    addInvestment(jwt)
  };


  

  return (
    <div className="fullscreen ">
      <Nav />
      <div className="columns is-multiline">
        <div className="container column px-3 py-4" id="cardholder">
          <Propertybar
            sorts = {sorts}
            createInvestment={createInvestment}
          />
          
          <div className="columns is-multiline py-4 px-5">

            {companiesState &&
            <InfiniteScroll
              dataLength={companiesState.length}
              loader={<h4>Loading...</h4>}
              height={800}
              className=" columns is-multiline"
            >
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
            


            </InfiniteScroll>
            }
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
