import React from "react";
import { useNavigate } from "react-router-dom";

const About = ({count}) => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>About</h1>
        <h2>Count: {count}</h2>
        <p>About page body content</p>
        <button onClick={()=>navigate(+1)}>Forward</button>
        <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}

export default About;