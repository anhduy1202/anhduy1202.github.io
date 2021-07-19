import { useEffect, useState } from 'react';
import swooshRed from './images/swoosh-red-mobile.svg';


const Project = (props) => {
    
    const {list,aos} = props;
   const [projectsNum,setProjectsNum] = useState(3);
   const [isActive, setActive] = useState(false);
   const handleLoadMore= ()=> {

setProjectsNum( projectsNum + projectsNum);

   }
   const handleLoadLess= () => {
       setProjectsNum(2);
   }

  
   const slice = list.slice(0,projectsNum); //Load more 
    return (  
        <div  className="projectContainer flex flex-ai-c ">
            <div className="projectContainer-name">
            <p id="projects" className="projectContainer-title"> Projects</p>
           <img className="projectContainer-img" src={swooshRed} alt="red swoosh" />
           </div>
            
                <div className="projectContainer-projects flex flex-ai-c" >
                
          {slice.map((data) => {
                const {id,name,image,content,link,languages} = data;
         
                return (
                 
                    
                    <div key={id} className="projects flex flex-ai-c">
                            <img   data-aos="fade-left" className="projects-thumbnail" src={image} alt="hi"/>
                                <div  className="projects-container flex">
                          
                           <p data-aos="zoom-in" data-aos-duration="1500" className="projects-title"> {name}</p>
                            <p data-aos="zoom-in"data-aos-duration="1500" className="projects-content"> {content}</p>
                            <div data-aos="zoom-in"data-aos-duration="1500" className="projects-link">
                                
                                <a href={link} target="_blank" rel="noopener noreferrer">
                                <span  className="website"> View website</span>
                                </a>
                               
                                <div data-aos="zoom-in" data-aos-duration="1500" className="projects-languages flex flex-ai-c flex-jc-c">
                            {languages.map(logo=> {
                                return (
                                    <img  key={logo} className="languages" src={logo} alt="languages" />
                                );
                            })}
                                       
                            </div>
                            
                            </div>
                            
                            </div>
                           
                           
                            
                    </div>
                );

          })}   
                        {projectsNum < list.length && (
                       <button data-aos="zoom-in" data-aos-duration="1000" className="loadMore" onClick={()=>handleLoadMore()}> Show more projects </button>
                        )}
                       {projectsNum >= list.length && (
                       <button  data-aos="zoom-in"  data-aos-duration="1000" className="loadLess" onClick={()=>handleLoadLess()}> Show Less projects </button>
                       )}
          </div>

        </div>
    );
}
 
export default Project
