import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Home</h1>
        <p>Home page body content</p>
        {/* <button onClick={()=>navigate(+1)}>Forward</button>
        <button onClick={()=>navigate(-1)}>Back</button> */}
        <button onClick={()=>navigate("/blog")}> Go to Blog 1</button> 
        {/* // localhost:3000/blog  */}
        <button onClick={()=>navigate("blog")}> Go to Blog 2</button>  
        {/* // url will be added to parent or existing url */}
        </div>
    );
}

export default Home;