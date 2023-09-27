import React from "react";
// import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Brand =  ()=>{

    const navigate = useNavigate()


    return(
        <div>
              <h1>Brand Page</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione hic, dicta odio necessitatibus culpa ducimus quam, voluptates adipisci nulla, ipsa perspiciatis ex nihil quia! Aspernatur, culpa totam. Tempore fugit nulla delectus ipsam quisquam iste perferendis, earum laborum, magnam blanditiis nam molestias, incidunt eius nisi dignissimos soluta ullam dolor cumque consequatur facilis mollitia voluptatum? Natus illo eveniet voluptas labore. Deserunt fugiat illo quaerat blanditiis totam omnis doloribus, maxime itaque provident excepturi consectetur quas a accusamus aliquid reprehenderit sunt placeat repellendus doloremque ea magnam? Libero, beatae magnam fuga dignissimos consequatur et iste placeat suscipit repudiandae id, in eos error nostrum dolorem?</p>
              {/* <button onClick={()=>navigate("")}>Apple</button> 
              {/* <button onClick={()=>navigate("/apple")}>Apple</button> 
              <button onClick={()=>navigate("/brand/apple")}>Apple</button>  */}
              {/* <button>Samsung</button>
              <button>Nokia</button> */}
              <button onClick={()=>navigate("samsung")}>Samsung</button> 
              <button onClick={()=>navigate("nokia")}>Nokia</button> 
              {/* <Outlet /> */} */
        </div>
    )
}

export default Brand