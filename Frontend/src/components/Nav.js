import 'bulma/css/bulma.min.css';
import './Components.css'
import { Route, Link, Routes } from "react-router-dom";


function Nav() {



  return (

    <nav className='navbar' role="navigation" aria-label="main navigation" >
        <div className='navbar-start'>
            <div className='navbar-item company'>
                Flexive
            </div>
        </div>

        <div className='navbar-end'>
            <div className='button is-primary mr-2 mt-3'  >
                <Link to="/account">
                    <strong>
                        Profile
                    </strong>
                </Link>
            </div>
            <div className='button is-danger mr-2 mt-3' >
                <strong>
                    Log Out
                </strong>
            </div>
        </div>

        

    </nav>



  );
}

export default Nav;
