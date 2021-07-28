
import avatar from './images/avatar.jpg';
import swooshYellow from './images/swoosh yellow-mobile.svg';
const About = (props) => {
    const { languages } = props;
    return (
        <main data-aos="zoom-out" className="aboutContainer flex flex-ai-c flex-jc-c">

            <img id="about" className="aboutContainer-avatar" src={avatar} alt="Profile picture" />
            <summary className="aboutContainer-bio">
                <p className="aboutContainer-hello"> Hello,
                    <img className="aboutContainer-swoosh" src={swooshYellow} alt="" />
                </p>

            </summary>
            <header className="aboutContainer-content">
                I’m Truong Quoc Anh Duy also known as Daniel Truong, a Computer Science sophomore whose goals are to become a full-stack developer, build pratical web and mobile applications.

            </header>
            <article className="sub flex">
                {languages.map(elements => {

                    return (
                        <section key={elements} className="aboutContainer-languages">
                            <img src={elements} />
                        </section>

                    );
                })}
            </article>
        </main>);
}

export default About;