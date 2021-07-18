
import React,{useState,useEffect} from 'react';
import NavBar from './NavBar';
import Landing from './Landing';
import About from './About';
import Project from './Project';

import {projects} from './projectData';
import { socialList, languages } from './data';
import Aos from "aos";
import "aos/dist/aos.css";
import './scss/style.css';


function App() {
  
  //window.addEventListener('load', Aos.refresh);
  const [list,setList] = useState(projects);
  
  useEffect(()=>{
    Aos.init({duration:2000});
      
   
}, []);
  return (
    <div className="App">
      <NavBar/>
     <Landing list={socialList}/>
     <About languages = {languages}/>
     <Project aos={Aos} list = {list} languages = {list}/>
 
    </div>
     
  );
}

export default App;
