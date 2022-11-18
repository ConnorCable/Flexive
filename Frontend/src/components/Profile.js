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
  const [companyToShow, setCompanyToShow] = useState(null);
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [data, setData] = useLocalState({}, "data");
  const [hasMore, setHasMore] = useState(false)

  const showModal = (company) => setCompanyToShow(company);
  const hideModal = () => setCompanyToShow(null);
  const navigate = useNavigate();

  const alphasort = () => {
    setCompanies(
      alphasort(companiesState)
    );
  };

  const lowsort = () => {
    setCompanies(
      lowsort(companiesState)
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

  useEffect(() => {
    getInvestments(jwt).then(data => setCompanies(data))
  }, []);
  

  const createInvestment = (e) => {
    setCompanies(...companiesState, addInvestment(jwt))
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
            sorts = {sorts}
            createInvestment={createInvestment}
          />
          
          <div className="columns is-multiline py-4 px-3">

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
