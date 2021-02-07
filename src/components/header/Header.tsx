import { GiHamburgerMenu } from 'react-icons/gi'; 
import { Link } from 'react-scroll';

//Components
import Logo from './Logo';
import Nav from '../nav/Nav';

const Header: React.FC = () => {

    return (
        <header className="header sticky">
            <Logo />
            <Nav />
            <label htmlFor="hamburger-menu" className="nav-label"><GiHamburgerMenu className="nav-hamburger" /></label>
            <input type="checkbox" id="hamburger-menu" className="nav-input" />
            <div className="navbar">
                <Link
                    className="navbar__link navbar__link--color navbar__link--hover"
                    to="about" activeClass="nav__link--active" spy={true} smooth={true} duration={1000}
                    >About
                </Link>
                <div className="nav__divider"></div>
                <Link
                    className="navbar__link navbar__link--color navbar__link--hover"
                    to="skills" activeClass="nav__link--active" spy={true} smooth={true} duration={1000}
                    >Skills
                </Link>
                <div className="nav__divider"></div>
                <Link
                    className="navbar__link navbar__link--color navbar__link--hover"
                    to="portfolio" activeClass="nav__link--active" spy={true} smooth={true} duration={1000}
                    >Portfolio
                </Link>
                <div className="nav__divider"></div>
                <Link 
                    className="navbar__link navbar__link--color navbar__link--hover"
                    to="contact" activeClass="nav__link--active" spy={true} smooth={true} duration={1000}
                    >Contact
                </Link>
            </div>
        </header>
    )
}

export default Header;
