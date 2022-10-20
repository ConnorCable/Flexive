import Card from "./Card";
import "./Components.css";

const Modal = (props) => {
  if (props.show == null) {
    console.log("Modal is hidden");
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-background" onClick={props.onClose}></div>
      <div className="modal-content">
        <Card company={props.company} />
        <div className="box mt-1">
          <div className="field">
            <label className="label">Amount to Change</label>
            <div className="control">
              <input className="input" type="investment" placeholder="$100"  id="investinput"/>
              <button className="button is-primary ml-1">Invest</button>
              <button className="button is-danger ml-1">Divest</button>
            </div>
            
          </div>
        </div>
        <button className="button is-danger" onClick={props.onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
