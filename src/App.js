import React,{useState} from "react"; 
import Home from "./Pages1/Home";
import About from "./Pages1/About";
import Contact from "./Pages1/Contact";
import Blog from "./Pages1/Blog";
import Navbar from "./Pages1/Navbar";
import "./App.css";

import {Routes, Route} from "react-router-dom";

const App = () => {

  const [count, setCount] = useState(0);


  return(
    <div>
           <Navbar /> 

           <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog count={count} setCount={setCount}/>} />
              <Route path="/about" element={<About count={count}/>} />
              <Route path="/contact" element={<Contact />} />

           </Routes>
           
    </div>
  )
}

export default App;
