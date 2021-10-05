
import {FaGithub, FaEye} from 'react-icons/fa';

interface Props {
    name: string,
    img: any, 
    github: string, 
    website: string
}

const Card: React.FC<Props> = ({name, img, github, website}: Props) => {
    return (
        <div className="portfolio__card animated" data-aos="fade-right">
        <div className="portfolio__card-body">
            <div className="portfolio__card-imgContainer">
                <h3 className="portfolio__card-title">{name}</h3>
                <img className="portfolio__card-img" src={img} alt="" />
            </div>
           
            <a href={github} className="portfolio__btn portfolio__btn--blue portfolio__btn--hover">
            <FaGithub className="portfolio__icon" />
                Github
            </a>	
            <a href={website} className="portfolio__btn portfolio__btn--pink portfolio__btn--hover">
               <FaEye className="portfolio__icon" />
                Project
            </a>
        </div>
    </div>
    )
}

export default Card
