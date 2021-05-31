const Contact: React.FC = () => {
	return (
		<section id="contact" className="contact">
			<h2 className="contact__heading">Contact Me</h2>
			<div className="contact__body">
				<h3 className="contact__sm-heading">This is how you can reach me...</h3>
				<ul className="contact__list">
					<li className="contact__list-item contact__list-item--hover">
						<span className="contact__list-text">Email&#58;</span>
						jorgen.arnes@gmail.com
					</li>
					<li className="contact__list-item contact__list-item--hover">
						<span className="contact__list-text">Phone&#58;</span>(+47)997 46
						968
					</li>
					<li className="contact__list-item contact__list-item--hover">
						<span className="contact__list-text">Address&#58;</span>Haakon
						Tveters vei 51, 0686 Oslo
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Contact;
