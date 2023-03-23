import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // const mobilenav = document.querySelector(".mobilenav");
  const location = useLocation();

  useEffect(() => {
    const nav = document.getElementsByClassName("nav")[0];
    const navItem = document.querySelectorAll(".nav-item");
    const logo = document.getElementsByClassName("logo")[0];
    // const active = document.querySelector(".active");
    let scroll = window.pageYOffset;
    if (window.screen.width > 655) {
      if (location.pathname !== "/") {
        nav.style.background = "rgb(255,255,255)";
        nav.style.boxShadow = "0 1px 10px 2px rgba(0, 0, 0, .7)";
        logo.style.color = "var(--cc-blue)";

        navItem.forEach((item) => {
          item.style.color = "var(--cc-blue)";
          item.style.background = "white";

          item.addEventListener("mouseenter", () => {
            item.style.color = "white";
            item.style.background = "var(--cc-blue)";
          });
          item.addEventListener("mouseout", () => {
            item.style.color = "var(--cc-blue)";
            item.style.background = "none";
          });
        });
      } else if (location.pathname === "/" && scroll < 40) {
        nav.style.background = "revert";
        nav.style.boxShadow = "none";
        logo.style.color = "white";

        navItem.forEach((item) => {
          item.style.color = "white";
          item.style.background = "none";
          item.addEventListener("mouseenter", () => {
            item.style.background = "var(--cc-blue)";
          });
          item.addEventListener("mouseout", () => {
            item.style.color = "white";
            item.style.background = "none";
          });
        });
      }
    } else {
    }
  }, [window.screen.width, location.pathname]);

  // Change navbar on scroll
  const scroller = () => {
    let scroll = window.pageYOffset;
    const nav = document.getElementsByClassName("nav")[0];
    const navItem = document.querySelectorAll(".nav-item");
    const logo = document.getElementsByClassName("logo")[0];

    if (scroll > 39) {
      nav.style.background = "rgb(255,255,255)";
      nav.style.boxShadow = "0 1px 10px 2px rgba(0, 0, 0, .7)";
      logo.style.color = "var(--cc-blue)";
      navItem.forEach((item) => {
        item.style.color = "var(--cc-blue)";
        item.style.background = "none";

        item.addEventListener("mouseenter", () => {
          item.style.color = "white";
          item.style.background = "var(--cc-blue)";
        });
        item.addEventListener("mouseout", () => {
          item.style.color = "var(--cc-blue)";
          item.style.background = "none";
        });
      });
    }
    // else if(){
    //   nav.style.color= "white"
    // }
    else {
      nav.style.background = "revert";
      nav.style.boxShadow = "none";
      logo.style.color = "white";

      navItem.forEach((item) => {
        item.style.color = "white";
        item.style.background = "none";
        item.addEventListener("mouseenter", () => {});
        item.addEventListener("mouseout", () => {
          item.style.color = "white";
        });
      });
    }
  };

  if (location.pathname === "/") {
    window.onscroll = scroller;
  } else {
    window.onscroll = [];
  }

  // Append the menu in mobile

  const appendMenu = (e) => {
    const mobilenav = document.querySelector(".mobilenav");
    let layer1 = document.getElementById("layer1");
    let layer2 = document.getElementById("layer2");
    let layer3 = document.getElementById("layer3");

    if (mobilenav.style.transform !== "translateY(0%)") {
      mobilenav.style.transform = "translateY(0%)";
      layer2.style.display = "none";
      layer1.style.transform = "rotate(135deg)";
      layer1.style.position = "relative";
      layer3.style.position = "relative";
      layer1.style.top = "5px";
      layer3.style.bottom = "5px";
      layer3.style.transform = "rotate(45deg)";
      console.log("if");
    } else {
      mobilenav.style.transform = "translateY(-100%)";
      layer2.style.display = "revert";
      layer1.style.transform = "revert";
      layer1.style.position = "revert";
      layer3.style.position = "revert";
      layer1.style.top = "revert";
      layer3.style.bottom = "revert";
      layer3.style.transform = "revert";
      console.log("else");
    }
  };

  // Close the menu after clicking a link in mobile

  const linkClick = () => {
    let menu = document.querySelector(".mobilenav");
    let layer1 = document.getElementById("layer1");
    let layer2 = document.getElementById("layer2");
    let layer3 = document.getElementById("layer3");

    menu.style.transform = "translateY(-100%)";
    layer2.style.display = "revert";
    layer1.style.transform = "revert";
    layer1.style.position = "revert";
    layer3.style.position = "revert";
    layer1.style.top = "revert";
    layer3.style.bottom = "revert";
    layer3.style.transform = "revert";
  };

  return (
    <>
      <nav className="nav">
        <h1 className="logo">Newsapp</h1>

        <ul className="nav-list">
          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/business" ? "active" : ""
              }`}
              to="/business"
            >
              Business
            </Link>
          </li>

          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/entertainment" ? "active" : ""
              }`}
              to="/entertainment"
            >
              Entertainment
            </Link>
          </li>

          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/general" ? "active" : ""
              }`}
              to="general"
            >
              General
            </Link>
          </li>

          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/health" ? "active" : ""
              }`}
              to="health"
            >
              Health
            </Link>
          </li>

          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/science" ? "active" : ""
              }`}
              to="science"
            >
              Science
            </Link>
          </li>

          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/sports" ? "active" : ""
              }`}
              to="sports"
            >
              Sports
            </Link>
          </li>

          <li>
            <Link
              className={`nav-item ${
                location.pathname === "/technology" ? "active" : ""
              }`}
              to="technology"
            >
              Technology
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="newnav">
        <h1 className="mobilelogo">Newsapp</h1>
        <div id="burger" onClick={appendMenu}>
          <div className="layer" id="layer1"></div>
          <div className="layer" id="layer2"></div>
          <div className="layer" id="layer3"></div>
        </div>
      </nav>

      <ul className="mobilenav">
        <li>
          <Link
            onClick={linkClick}
            className={`mobilenav-item ${
              location.pathname === "/" ? "active" : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            onClick={linkClick}
            className={`mobilenav-item ${
              location.pathname === "/business" ? "active" : ""
            }`}
            to="/business"
          >
            Business
          </Link>
        </li>

        <li>
          <Link
            onClick={linkClick}
            className={`mobilenav-item ${
              location.pathname === "/entertainment" ? "active" : ""
            }`}
            to="/entertainment"
          >
            Entertainment
          </Link>
        </li>

        <li>
          <Link
            onClick={linkClick}
            className={`mobilenav-item ${
              location.pathname === "/general" ? "active" : ""
            }`}
            to="general"
          >
            General
          </Link>
        </li>

        <li>
          <Link
            onClick={linkClick}
            className={`mobilenav-item ${
              location.pathname === "/health" ? "active" : ""
            }`}
            to="health"
          >
            Health
          </Link>
        </li>

        <li>
          <Link
            onClick={linkClick}
            className={`mobilenav-item ${
              location.pathname === "/science" ? "active" : ""
            }`}
            to="science"
          >
            Science
          </Link>
        </li>

        <li>
          <Link
            onClick={linkClick}
            className={`mobilenav-item ${
              location.pathname === "/sports" ? "active" : ""
            }`}
            to="sports"
          >
            Sports
          </Link>
        </li>

        <li>
          <Link
            onClick={linkClick}
            className={`mobilenav-item ${
              location.pathname === "/technology" ? "active" : ""
            }`}
            to="technology"
          >
            Technology
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
