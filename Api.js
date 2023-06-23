import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Api() {
    const [product, setProduct] = useState([])
   useEffect(() => {
   
       fetch("https://fakestoreapi.com/products").then((res) => { 
        // fetch(" https://api.sampleapis.com/coffee/hot").then((res) => { 
           return res.json();
       }).then((prList) => { 
           setProduct(prList)
        
       })
   }, [])
     

  return (   
    <div className='d-flex  flex-wrap'>
          {
              product.map((prd) => { 
                  return (
                      <div className="card" style={{ width: "18rem" }}>
                          <img width={"100px"} height={"100px"} className="card-img-top" src={ prd.image} alt="Card image cap" />
  <div className="card-body">
                              <h5 className="card-title">{ prd.title.substring(0, 50)}</h5>
                              <p className="card-text">{ prd.description.substring(0, 100)}</p>
    <Link to={`/product/${prd.id}`} className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
                 )
              })
          }
    </div>
  )
}