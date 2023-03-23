import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-text">
          <h1>Welcome to Newsapp</h1>
          <h3>The destination for daily news</h3>
        </div>
      </div>

      <div className="about">
        <h1>Note</h1>
        <p>
          This is an application built using the news API. It helps us to read
          the top news of the day worldwide. Select a category from the menu and
          stay updated with what is happening around the world
        </p>
        <p>The news API will respond only to 100 requests per day </p>
      </div>

      <div id="footer">
        <h4>Created by Akhtar Ameen</h4>
      </div>
    </div>
  );
}

export default Home;
