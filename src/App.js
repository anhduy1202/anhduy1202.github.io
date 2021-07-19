
import React,{useState,useEffect,useRef} from 'react';

import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

import Aos from "aos";
import "aos/dist/aos.css";
import './scss/style.css';


function App() {
  
  const [loading,setLoading] = useState(true);
  const [time,setTime] = useState(3);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setLoading(false);
    
        }
  
  useEffect(()=>{
    Aos.init({duration:2000});
    id.current = window.setInterval(() => {

      setTime((time) => time - 1)
    },600)
  },[]);
    useEffect(()=> {
      if (time === 0) {
        clear();
                     }

    },[time])
       
  return (
    <div className="App">
       {loading ? ( 
                    <div className="loading-wrapper flex flex-ai-c flex-jc-c">
                      <div className="thecube">
                          <div className="cube c1"></div>
                          <div className="cube c2"></div>
                          <div className="cube c3"></div>
                          <div className="cube c4"></div>

                      </div>
                      <div className="text flex flex-ai-c flex-jc-c">
                            <h1> Daniel Truong </h1>
                            <h2> 2021           </h2>
                            </div>
                    </div>
            ): (
              <div className="content" >
      <NavBar />
      <Home aos={Aos} />
      <Footer/>
          </div>
      )}
   
    </div>
     
  );
}

export default App;
