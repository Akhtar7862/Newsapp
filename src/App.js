import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/business"
            element={<News category="business" pageSize="18" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News category="entertainment" pageSize="18" />}
          />
          <Route
            exact
            path="/general"
            element={<News category="general" pageSize="18" />}
          />
          <Route
            exact
            path="/health"
            element={<News category="health" pageSize="18" />}
          />
          <Route
            exact
            path="/science"
            element={<News category="science" pageSize="18" />}
          />
          <Route
            exact
            path="/sports"
            element={<News category="sports" pageSize="18" />}
          />
          <Route
            exact
            path="/technology"
            element={<News category="technology" pageSize="18" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
