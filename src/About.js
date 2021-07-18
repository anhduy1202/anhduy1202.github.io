
import avatar from './images/avatar.jpg';
import swooshYellow from './images/swoosh yellow-mobile.svg';
const About = (props) => {
    const {languages} = props;
    return (
         <div className="aboutContainer flex flex-ai-c flex-jc-c">
                
        <img className="aboutContainer-avatar" src={avatar} alt="Profile picture" />
       <div className="aboutContainer-bio">
           <p className="aboutContainer-hello"> Hello,
            <img className="aboutContainer-swoosh" src={swooshYellow} alt="" />
            </p>
            
       </div>
                <p className="aboutContainer-content">
             I’m Truong Quoc Anh Duy also known as Daniel Truong, a Computer Science sophomore whose goals are to become a full-stack developer, build pratical web and mobile applications.

                </p>
                <div className="sub flex">
                {languages.map(elements => {

                    return (
                        <div key={elements} className="aboutContainer-languages">
                    <img src={elements} />
                        </div>

                    );
                })}
                </div>
    </div> );
}
 
export default About;