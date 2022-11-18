


const InvestInput = () => {
    return (
        <>
        <label className="label">Amount to Change</label>
            <div className="control">
              <input className="input" type="investment" placeholder="$100"  id="investinput"/>
              <button className="button is-primary ml-1">Invest</button>
              <button className="button is-danger ml-1">Divest</button>
            </div>
        </>
    )

}

export default InvestInput;