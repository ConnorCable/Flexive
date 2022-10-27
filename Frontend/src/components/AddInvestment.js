import "./Profile.css";
import React from "react";


const AddInv = () => {
    return(
        <div className="column is-2" id="createinvestment">
          <div className="box ">
            <h1 className="title">Create Investment</h1>
            <form>
              <div className="field is-horizontal">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" />
                </div>
              </div>
              <div className="field is-horizontal">
                <label className="label">Ticker</label>
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
            </form>
          </div>
        </div>
    )
}

export default AddInv