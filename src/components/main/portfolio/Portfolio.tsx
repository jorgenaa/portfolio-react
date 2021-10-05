import { assets } from './assets';

//Component
import Card from './Card';

const Portfolio: React.FC = () => {
	return (
		<section id="portfolio" className="portfolio">
			<h2 className="portfolio__heading">Portfolio</h2>
			<div className="portfolio__cards">
				{assets.map((item: any, index: any) => {
					const { title, img, github, website } = item;
					return <Card name={title} img={img} github={github} website={website} />;
				})}
			</div>
		</section>
	);
};

export default Portfolio;
