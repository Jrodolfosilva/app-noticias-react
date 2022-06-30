import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./header/Header";
import Form from "./form/Form"
import Home from "./home/Home"


const Root = ()=>{

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Form/>}/>
      <Route path="/create/:id" element={<Form/>}/>
    </Routes>  
    </BrowserRouter>
  );
}

export default Root;
