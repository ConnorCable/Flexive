import { changeFundstoInvestment ,changeFunds } from "../util/api";
import { useState } from "react";
import { useLocalState } from "../util/useLocalStorage";
const InvestInput = (props) => {
    const [inputVal, setInputVal] = useState("")
    const [data, setData] = useLocalState({}, "data");
    const [jwt, setJwt] = useLocalState("", "jwt");


    const handleSubmit = (e) => {
        e.preventDefault()

        changeFunds(jwt, inputVal, data["id"], "subtract")
        changeFundstoInvestment(jwt, inputVal, props.company.id, "add")
        setTimeout(() => window.location.reload(true), 200)
    }

    function onChangeTagInput(e) {
        setInputVal(e.target.value.replace(/[^\d.]/ig, ""));
    }

    return (
        <>
        <label className="label">Amount to Change</label>
            <div className="control">
              <input className="input" type="investment" onChange={onChangeTagInput} placeholder="$100" value={inputVal} id="investinput"/>
              <button className="button is-primary ml-1" onClick={handleSubmit}>Invest</button>
              <button className="button is-danger ml-1">Divest</button>
            </div>
        </>
    )

}

export default InvestInput;