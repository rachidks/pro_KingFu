import Home from "./Pages/Home/Home"
import Nav from "./sections/Nav/Nav";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import List from "./Pages/List/List";

function App() {
  return (
   <><Nav/><Home/>
   {/* <BrowserRouter>
   
   <Routes>
    
      <Route path="/Home" element={<Home/>} />
      <Route path="/List" element={<List/>} />
   
   </Routes>
   
   </BrowserRouter> */}
   
   </>
  );
}

export default App;
