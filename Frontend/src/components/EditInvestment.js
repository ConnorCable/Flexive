import { useState } from "react";



const EditInvestment = (props) => {




  const [companyDetails, setCompanyDetails] = useState({
    ...props.company
  })

  let name;
  let description;
  let ticker;

  const changeHandler = (e) => {
    setCompanyDetails({...companyDetails, [e.target.name] : e.target.value})
    console.log(companyDetails)
  }

  return (
    <form className="box">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="name" name={"name"} value={name} defaultValue={props.company.name} onChange={changeHandler} required/>
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input className="input" type="description" name={"description"} value={description} defaultValue={props.company.description} onChange={changeHandler} required/>
        </div>
      </div>

      <div className="field">
        <label className="label">Ticker</label>
        <div className="control">
          <input className="input" type="ticker" value={ticker} name={"ticker"} defaultValue={props.company.ticker} onChange={changeHandler} required/>
        </div>
      </div>
      <div className="control">
        <button className="button is-primary">Submit Changes</button>
      </div>
    </form>
  );
};

export default EditInvestment;
