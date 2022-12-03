import Nav from "./Nav";
import { useLocalState } from "../util/useLocalStorage";



const Account = () => {
  const [data, setData] = useLocalState({}, "data");



  let money;

  return (
    <div>
      <Nav />
      <section className="hero fullscreen is-fullheight">
        <div className="hero-body">
          <div className="container">
            <strong className="is-size-1">Add Funds</strong>
            <input
              class="input is-large is-info"
              value={money}
              name="money"
              type="text"
              placeholder="$1000"
            />
            <button className="button is-link mt-1">Add</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
