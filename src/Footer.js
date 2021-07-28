import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import upArrow from './icon/arrow-up.svg';
const Footer = () => {
    return (
        <footer>
            <section className="footer flex flex-ai-c ">
                <Link className="goToTop flex flex-ai-c" to="nav" smooth="true" > Go to top <img src={upArrow} alt="" />  </Link>
            </section>

        </footer>

    );
}

export default Footer;