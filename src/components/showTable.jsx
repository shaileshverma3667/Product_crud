import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ShowTable() {
    const [data, setData] = useState([])
    const navigate=useNavigate()
   

  const getData=()=>{
   let promise = fetch("http://localhost:5000/product", {
            method: "GET",
        })
        promise.then((res) => {
            return res.json();
        }).then((item) => {
            setData(item)
        }).catch((error) => {
            console.log(error)
        })
  }
    useEffect(() => {
       getData()

    }, [])
  
    const edituser=(id)=>{
    navigate('/edit/'+id)

    }
    const deleteuser=(id)=>{
        console.log(id)
        let promise = fetch("http://localhost:5000/product/"+id, {
            method: "DELETE",
        })
        promise.then((res) => {
            return res.json();
            // window.location.reload()
        }).then((item) => {
            getData(    )
            console.log(item)
        }).catch((error) => {
            console.log(error)
        })
      

    }
    return (
        <>
            <h1>this is table</h1>
            <table className="table table-striped table-hover table-responsive fs-3">
                <thead>
                    <tr className="text-bg-dark">
                    <th>Id</th>
                    <th>PName</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                 {
                    data.map((p,i)=>{
                        console.log(p.url)
                        return(
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.pname}</td>
                                <td>{p.price}</td>
                                <td>{p.quantity}</td>
                                <td><img src={p.url} height="100px" width="100px"/></td>
                                <td><button onClick={()=>{edituser(p.id)}} className="btn btn-warning">Edit</button>
                                <button onClick={()=>{deleteuser(p.id)}} className="btn btn-danger ms-3">Delete</button></td>
                            </tr>
                        )
                    })
                 }
                </tbody>
            </table>
        </>
    )
}