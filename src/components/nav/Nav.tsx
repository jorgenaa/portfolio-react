
import { Link } from 'react-scroll';

const Nav: React.FC = () => {

    return (
          <>
            <nav className="nav">
                <Link className= "nav__link nav__link--color nav__link--hover" activeClass="nav__link--active" spy={true} to="about" smooth={true} duration={1000}>
                    About 
                </Link>
                <div className="nav__divider"></div>
                <Link className="nav__link nav__link--color nav__link--hover" activeClass="nav__link--active" spy={true} to="skills" smooth={true} duration={1000}>
                    Skills
                </Link>
                <div className="nav__divider"></div>
                <Link className="nav__link nav__link--color nav__link--hover" activeClass="nav__link--active" spy={true} to="portfolio" smooth={true} duration={1000}>
                    Portfolio
                </Link>
                <div className="nav__divider"></div>
                <Link className="nav__link nav__link--color nav__link--hover" activeClass="nav__link--active" spy={true} to="contact" smooth={true} duration={1000}>
                    Contact
                </Link>
            </nav>
           
            <div className="contact-info">
                <p className="contact-info__email">
                    <i className="fas fa-envelope contact-info__icon"></i>
                    <span className="contact__email">jorgen.arnes@gmail.com</span>
                </p>
            </div>
          
        </>
    )
}

export default Nav;
