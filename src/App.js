import React,{useState} from "react"; 
import Home from "./Pages1/Home";
import About from "./Pages1/About";
import Contact from "./Pages1/Contact";
import Blog from "./Pages1/Blog";
import Navbar from "./Pages1/Navbar";
import "./App.css";

import Brand from "./Pages2/Brand"
import Apple from "./Pages2/Apple"
import Samsung from "./Pages2/Samsung"
import Nokia from "./Pages2/Nokia"
import Navbar2 from "./Pages2/Navbar2";

import {Routes, Route} from "react-router-dom";

const App = () => {

  // const [count, setCount] = useState(0);

  // Nested route or parent child route
  return(
    <div>
             
        <Routes>
             <Route path="/"  element={<Navbar />}>
                    <Route path="" element={<Home />} />
                    <Route path="blog" element={<Blog/>} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                 
             </Route>
             <Route path="/brand"  element={<Navbar2 />}>
                    <Route path="" element={<Brand />} />
                    <Route path="apple" element={<Apple/>} />
                    <Route path="Samsung" element={<Samsung />} />
                    <Route path="nokia" element={<Nokia />} />
                 
             </Route>
        </Routes>
             

              
           
           
    </div>
  )
}

export default App;



// pages 1
{/* <Navbar /> 

<Routes>

   <Route path="/home" element={<Home />} />
   <Route path="/blog" element={<Blog count={count} setCount={setCount}/>} />
   <Route path="/about" element={<About count={count}/>} />
   <Route path="/contact" element={<Contact />} />

</Routes> */}

// pages2

// {/* <Routes>
//                <Route path="/brand" element= {<Brand />}> 
//                   <Route path="" element= {<Apple />}/>  {/* /apple */}
//                   <Route path="samsung" element= {<Samsung />}/>
//                   <Route path="nokia" element= {<Nokia />}/>
// </Route> */
// }