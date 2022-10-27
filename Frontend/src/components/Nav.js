import 'bulma/css/bulma.min.css';
import './Components.css'

function Nav() {
  return (

    <nav className='navbar' role="navigation" aria-label="main navigation" >
        <div className='navbar-start'>
            <div className='navbar-item company'>
                Flexive
            </div>
        </div>

        <div className='navbar-end'>
            <div className='button is-primary mr-2 mt-3' >
                <strong>
                    Profile
                </strong>
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
