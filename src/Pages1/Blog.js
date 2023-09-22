import React from "react";
import { useNavigate } from "react-router-dom";


const Blog = ({count,setCount}) => {
    const navigate = useNavigate();

   
    return (
        <div>
            
        <h1>Blog</h1>
        <h2>Count: {count}</h2>
        <p>Blog page body content</p>
        {/* <button onClick={() => setCount(count+1)}>Click me</button> */}
        <button onClick={()=>navigate(+1)}>Forward</button>
        <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}

export default Blog;