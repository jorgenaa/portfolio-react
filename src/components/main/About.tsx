
import ProfileImg from '../../assets/img/IMG_4924.jpg';


const About: React.FC = () => {
 
    return (
            <section id="about" className="about">
                <h2 className="about__heading">About Me</h2>
                <div className="about__body">
                    <div className="about__item">
                        <img 
                            className="about__img"
                            src={ProfileImg}
                            alt="Profile"
                        />
                    </div>
                    <div className="about__item">
                        <h3 className="about__item-heading">Hello I'm Jørgen</h3>
                        <p className="about__text">
                            I'm a junior Front-End developer from Norway with high focus on
                            user experience, user interface and technology.
                        </p>
                        <p className="about__text">
                            Beside studying at Noroff I'm open to gain more knowledge
                            through real projects from companies who also are looking for a
                            potential Front-End developer.
                        </p>
                        <p className="about__text">
                            So far I have acquired powerfull skills for building appealing
                            and responsive websites that meets the today's criteria.
                        </p>
                        <p className="about__text">
                            To see some examples of what I have worked with lately, check
                            out some of my projects in the portfolio section.
                        </p>
                    </div>
                   
                </div>
                {/* <!-- row --> */}
            </section>
        )
    }

export default About;