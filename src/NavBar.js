
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavBar = () => {

    return (

        <nav id="nav" className="navContainer flex flex-ai-c">
            <header className="logo"> Daniel Truong</header>
            <ul className="nav-content flex">
                <li><Link to="home" smooth={true}>  Home </Link> </li>
                <li> <Link to="about" smooth={true}>  About </Link> </li>
                <li> <Link to="projects" smooth={true}> Projects </Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
