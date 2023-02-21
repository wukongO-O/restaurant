import { Link } from 'react-router-dom';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';
import './footer.styles.scss';

const Footer = () => {
    return(
        <div className='footer'>
           
            <div className='copyright'>
                Created by Shenglan Li
                <div className='github-link-container'>
                <Link className='github-link' to='https://github.com/wukongO-O/restaurant.git'>
                    <GithubLogo className='github-logo' />
                </Link>
                </div>
            </div>
            <div className='photocredit'>
                Photos by Unsplash
            </div>
        </div>
    );
};

export default Footer;