import { Outlet, Link } from 'react-router-dom';
import SandwichBackground from '../../assets/sandwich.jpg';
import Button from '../../components/button/button.component';

import './home.styles.scss';

const Home = () => {
    return (
        <div className="home">
            <Outlet />
            <div className="name">
                <h1>Busytown Bistro</h1>
            </div>
            <div className="slogan">
                <p>Catch a yummy break at <strong>Busytown Bistro</strong>!</p>
                <p>Best Food in town! Bon appétit!</p>
                <Link className='nav-link' to='/menus' >
                <Button>Order</Button>
                </Link>
            </div>
            
        </div>
    )
};

export default Home;