import React, { useEffect,useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
export default function Edit(){
    const [pname,setPname]=useState("");
    const [price,setPrice]=useState("");
    const [quantity,setQuantity]=useState("");
    const [url,setUrl]=useState("")
    const {id}=useParams()
    const navigate=useNavigate()
    
    useEffect(()=>{
    let promise=fetch("http://localhost:5000/product/"+id)
    promise.then((res)=>{
        return res.json();
    }).then((data)=>{
        setPname(data.pname)
        setPrice(data.price)
        setQuantity(data.quantity)
        setUrl(data.url)
    }).catch((error)=>{
     console.log(error)
    })
    },[])

   const updateData=()=>{
    let newData={
        pname:pname,
        price:price,
        quantity:quantity,
        url:url
    }
    let promise=fetch("http://localhost:5000/product/"+id,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newData)
     })
     promise.then((res)=>{
        return res.json();
       
     }).then((data)=>{
        console.log(data)
     }).catch((error)=>{
        console.log(error)
     })
     navigate("/showtable")
    }


   
    return (
        <>
            <h1>this is Product pages</h1>
            <div className="card w-75 mx-auto">
                <div className="card-header"><h1 className="text-center">Product Form</h1></div>
                <div className="card-body">
                    <form>
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
                        <input type="button" className="form-control w-50 mx-auto text-bg-success" value="update" onClick={updateData}/>
                    </form>
                </div>
            </div>

        </>
    )
}
    
