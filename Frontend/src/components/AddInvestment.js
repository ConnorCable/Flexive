import "./Profile.css";
import React from "react";

const AddInv = (props) => {

 


  return (
    <div className="column is-2" id="createinvestment">
      <div className="box">
        <h1 className="title ml-6">Create Investment</h1>
        <form>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="control">
              <input className="input" name="invname" value={invname} onChange={props.setInvData}/>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Ticker</label>
            </div>
            <div className="control">
              <input className="input" />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Description</label>
            </div>
            <div className="control">
              <input className="input" />
            </div>
          </div>
          <div className="field is-grouped is-justify-content-center">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light" onClick={props.addInvestment}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInv;
