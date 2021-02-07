
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__item">
                <p>Copyright</p>
            </div>
            <div className="footer__item">
                <a
                    className="footer__link footer__link--hover"
                    href="https://www.linkedin.com/in/jorgen-arnes-70991625"
                >
                    <i className="fab fa-linkedin footer__icon"></i> LinkedIn
                </a>
                <a className="footer__link footer__link--hover" href="https://github.com/">
                    <i className="fab fa-github footer__icon"></i> Github
                </a>
            </div>
        </footer>
    )
}

export default Footer;