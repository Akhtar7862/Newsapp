import React from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import Home from "./components/Home/Home"
import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar/> 
        <Routes> 
      <Route exact path="/" element={<Home/> } />
      <Route exact path="/business" element={<News just="Business"/> } />
      <Route exact path="/entertainment" element={<News just="Entertainment"/> }/>
      <Route exact path="/general" element={<News just="General"/> } />
      <Route exact path="/health" element={<News just="Health"/> } />
      <Route exact path="/science" element={<News just="Science"/> } />
      <Route exact path="/sports" element={<News just="Sports"/> } />
      <Route exact path="/technology" element={<News just="Technology"/> } />
        

       </Routes>
       </BrowserRouter>  

    </div>
  );
}

export default App;
