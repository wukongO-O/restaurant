import { Outlet } from 'react-router-dom';
import './contact.styles.scss';

const Contact = () => {
    return (
        <div className="contact">
            <Outlet />
            <div className='hours'>
                <p>Hours</p>
                <p>Mon - Fri: 11am - 9pm</p>
                <p>Sat - Sun: 10am - 10pm</p>
            </div>
            <div className="address">
                <p>Address: 123 Buzzy Boulevard, Busytown, NY</p>
            </div>
            <div className="tel">
                <p>Phone: 888-888-8888</p>
            </div>
        </div>
    )
};

export default Contact;