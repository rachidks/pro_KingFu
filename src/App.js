import Home from "./Pages/Home/Home";
import Nav from "./sections/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import List from "./Pages/List/List";
import React from "react";

export default class App extends React.Component {
  
  state ={
    table:[]
}
clicks=(vals)=>{
    this.setState({table:vals});
}

  
 render(){

  return (
   <>
   <BrowserRouter>

   <Nav/>
   <Routes>
    
      <Route path="/" element={<Home clicks={this.clicks}/>} />
      <Route path="/List" element={<List table={this.state.table}/>} />
   
   </Routes>
   
   </BrowserRouter>
   
   </>
  );}
}

