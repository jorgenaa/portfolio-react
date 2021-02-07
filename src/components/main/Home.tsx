import {Link} from 'react-scroll';

const Home: React.FC = () => {
   
    return <section className="home">
            
                <div className="home__left-triangle" id="left-triangle">
                    <h1 className="home__heading-1-1 home__heading-1-1--animate">Front-End Developer</h1>
                </div>
                <div className="home__right-triangle" id="right-triangle">
                    <h1 className="home__heading-1-2 home__heading-1-2--animate">&#38; Designer</h1>
                    <Link 
                        to="portfolio" smooth={true} duration={1000}
                        className="home__btn home__btn--blue home__btn--hover home__btn--animate"
                    >
                        Go to Portfolio <i className="fas fa-mouse-pointer"></i>
                    </Link>
                </div>
            </section>
}

export default Home;