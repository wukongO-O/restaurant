import { Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
          <div className='navigation'>
            <div className="nav-links-container">
                <div className="nav-link-container">
                    <Link className="nav-link" to='/'>
                        Home
                    </Link>
                </div>
                <div className="nav-link-container">
                    <Link className="nav-link" to='/menus'>
                        Menus
                    </Link>
                </div>
                <div className="nav-link-container">
                    <Link className="nav-link" to='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
          </div>
          <Outlet />
        </Fragment>
      )
}

export default Navigation;