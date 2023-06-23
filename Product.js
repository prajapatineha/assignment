import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function Product(props) {
    const [prd,setPrd] = useState({})
    let { id } = useParams();  
     useEffect(() => {
       fetch(`https://fakestoreapi.com/products/${id}`).then((res) => { 
           return res.json();
       }).then((prList) => { 
           setPrd(prList);  
       })
   }, [])
  return (
    <div>
        <img src={prd.image} alt=""  style={{ width: "20%", height: "20%" }} />
        <h1>{prd.title}</h1>
        <h1>{prd.description}</h1>
    </div>
  )
}

