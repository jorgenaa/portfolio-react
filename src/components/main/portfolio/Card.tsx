
import {FaGithub, FaEye} from 'react-icons/fa';

interface Props {
    img: any, 
    github: string, 
    website: string
}

const Card: React.FC<Props> = ({img, github, website}: Props) => {
    return (
        <div className="portfolio__card animated" data-aos="fade-right">
        <div className="portfolio__card-body">
            <img className="portfolio__card-img" src={img} alt="" />
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
