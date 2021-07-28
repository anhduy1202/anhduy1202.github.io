
import coding from './images/coding-icon-mobile.svg';
import swooshBlue from './images/swoosh-blue-mobile.svg';
const Landing = (props) => {
    const { list } = props;

    return (
        <main className="topContainer flex">
            <figure className="topContainer-title flex flex-ai-fe">
                <p> Front-End Developer </p>
                <img className="topContainer-coding" src={coding} alt="" />
                <img className="topContainer-swoosh" src={swooshBlue} alt="" />

            </figure>
            <article className="topContainer-social flex flex-ai-c">
                {list.map(element => {
                    const { social, id, image, link } = element;
                    return (
                        <aside className="topContainer-icon" key={id}>
                            <a href={link} target="_blank" rel="noopener noreferrer">

                                <img src={image} alt="Error displaying img" />
                            </a>

                        </aside>
                    );
                })}

            </article>
        </main>
    );
}

export default Landing;
