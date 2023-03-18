import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function Product() {
    const [pname,setPname]=useState("");
    const [price,setPrice]=useState("");
    const [quantity,setQuantity]=useState("");
    const [url,setUrl]=useState("")
    const navigate=useNavigate()

   const saveData=(e)=>{
     e.preventDefault();
     let pdata={pname,price,quantity,url}
     //console.log(pdata)
     let promise=fetch("http://localhost:5000/product",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(pdata)
     })
     promise.then((res)=>{
        return res.json();
     }).then((data)=>{
        console.log(data);
        navigate("/showtable")
     }).catch((error)=>{
        console.log(error)
     })
   }
    return (
        <>
            <h1>this is Product pages</h1>
            <div className="card w-75 mx-auto">
                <div className="card-header"><h1 className="text-center">Product Form</h1></div>
                <div className="card-body">
                    <form onSubmit={saveData}>
                        <div className="mb-3 w-50 mx-auto">
                            <label for="a" className="form-label">ProductName</label>
                            <input type="text" className="form-control" id="a" placeholder="Enater your Product Name" value={pname} onChange={(e) => { setPname(e.target.value) }} />
                        </div>
                        <div className="mb-3 w-50 mx-auto">
                            <label for="b" className="form-label">Price</label>
                            <input type="text" className="form-control" id="b" placeholder="Enater your Price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        </div>
                        <div className="mb-3 w-50 mx-auto">
                            <label for="c" className="form-label">Quantity</label>
                            <input type="text" className="form-control" id="c" placeholder="Enater your Quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                        </div>
                        <div className="mb-3 w-50 mx-auto">
                            <label for="d" className="form-label">Image url</label>
                            <input type="text" className="form-control" id="d" placeholder="Enter your url" value={url} onChange={(e) => { setUrl(e.target.value) }}/>
                        </div>
                        <input type="submit" className="form-control w-50 mx-auto text-bg-success" />
                    </form>
                </div>
            </div>

        </>
    )
}