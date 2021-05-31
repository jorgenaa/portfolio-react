//Icons
import HTML from '../../assets/icons/HTML.png';
import CSS from '../../assets/icons/CSS.png';
import JS from '../../assets/icons/JavaScript.png';
import Bootstrap from '../../assets/icons/Bootstrap.png';
import Sass from '../../assets/icons/Sass.png';
import Github from '../../assets/icons/GitHub.png';
import Illustrator from '../../assets/icons/Illustrator.png';
import Photoshop from '../../assets/icons/Photoshop.png';
import XD from '../../assets/icons/XD.png';
import Wordpress from '../../assets/icons/Wordpress.png';
import Scrum from '../../assets/icons/Scrum.png';
import ReactIcon from '../../assets/icons/react.png';

const icons = [
	HTML,
	CSS,
	JS,
	Bootstrap,
	Sass,
	Github,
	Illustrator,
	Photoshop,
	XD,
	Wordpress,
	Scrum,
	ReactIcon,
];

const Skills: React.FC = () => {
	return (
		<section id="skills" className="skills">
			<h2 className="skills__heading">My Skills</h2>
			<div className="skills__row">
				{icons.map((icon: any) => {
					return (
						<img
							className="skills__icon animated"
							src={icon}
							alt="icon"
							data-aos="fade-right"
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Skills;
