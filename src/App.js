import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import Navbar from "./components/Navbar";
import Home from "./components/home";
import ShowTable from "./components/showTable";
import Gallery from "./components/gallery";
import { Route, Routes } from "react-router-dom";
import Product from "./components/product";
import Edit from "./components/edit";
export default function App(){
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/showtable" element={<ShowTable/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
       
         </>
    )
}