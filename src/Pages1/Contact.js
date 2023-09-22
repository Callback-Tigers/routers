import React from "react";
import { useNavigate } from "react-router-dom";


const Contact = () => {
    const navigate = useNavigate();

    return (
        <div>
        <h1>Contact</h1>
        <p>Contact page body content</p>
         {/* <button onClick={()=>navigate("/")}>Go to Home</button> */}
         <button onClick={()=>navigate(+1)}>Forward</button>
        <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}

export default Contact;