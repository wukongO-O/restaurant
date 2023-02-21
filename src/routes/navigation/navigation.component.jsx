import { Fragment, useContext } from "react";
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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
            <div className="shopping-links">
                {currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>
                        Sign out
                    </span>
                    ) : (
                        <Link className='nav-link' to='/auth'>
                        Sign in
                        </Link>
                )}
                <Link className="checkout-link" to='/checkout' >
                    <CartIcon />
                </Link>
            </div>
          </div>
          <Outlet />
        </Fragment>
      )
}

export default Navigation;