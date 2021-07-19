import React,{useState,useEffect, useRef, useDebugValue} from 'react';
import Landing from './Landing';
import About from './About';
import Project from './Project';

import {projects} from './projectData';
import { socialList, languages } from './data';
const Home = () => {
    const [list,setList] = useState(projects);
   
    
   
    
    useEffect(()=> {
       

    },[])
   
    return ( 
        <div id="home">
            
                
        <Landing list={socialList}/>
     <About languages = {languages}/>
     <Project list = {list} languages = {list}/>
               
               
            
            </div>
       
     );
     
}
 
export default Home;