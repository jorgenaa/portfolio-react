import {animateScroll as scroll} from 'react-scroll';
import LogoIcon from '../../assets/logo/logo-aqua-2.png';

const Logo:React.FC = () => {
    return (
        <>
            <div className="logo" onClick={()=> scroll.scrollToTop()}>
                 <img
                    className="logo__item"
                    src={LogoIcon}
                    alt="logo"
                /> 
            </div>
        </>
    )
}

export default Logo;