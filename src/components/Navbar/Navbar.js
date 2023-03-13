import React from 'react'
import  {Link, useLocation}  from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  const mobilenav= document.querySelector(".mobilenav")
  const location = useLocation();

// Change navbar on scroll

  window.onscroll = function (event){

    let scroll = window.pageYOffset;
    const nav= document.getElementsByTagName("nav")[0]
    const navItem= document.querySelectorAll(".nav-item")
    const logo= document.getElementsByClassName("logo")[0]

    if(scroll>39 && window.screen.width>655){
      nav.style.background= "rgb(255,255,255)"
      nav.style.boxShadow= "0 1px 10px 2px rgba(0, 0, 0, .7)"
      logo.style.color= "var(--cc-blue)"

      navItem.forEach((item) => {
        item.style.color= "var(--cc-blue)"
        item.addEventListener("mouseenter", ()=>{
          item.style.color= "white"
        })
        item.addEventListener("mouseout", ()=>{
          item.style.color= "var(--cc-blue)"
        })
      })
    }

    else if(window.screen.width>655 && scroll<40 ){
      nav.style.background= "revert"
      nav.style.boxShadow= "revert"
      logo.style.color= "white"

      navItem.forEach((item)=>{
        item.style.color="white"
        item.addEventListener("mouseenter",()=>{
        })
        item.addEventListener("mouseout",()=>{
          item.style.color= "white"
        })
      })
    }
    else{

    }


  }

  // const appendMenu = (e)=>{
  //   const mobilenav= document.querySelector(".mobilenav")
  //  if(mobilenav.style.transform==="translateY(-100%)"){
  //   mobilenav.style.transform="translateY(0%)"
  //   console.log("if")
  //  }
  //  else{
  //   mobilenav.style.transform="translateY(-100%)"
  //   console.log("else")
  //  }
  // }


 

  return (
       <>  
    <nav>

    <h1 className="logo">Newsapp</h1>

    <ul className='nav-list'>

      <li><Link className={`nav-item ${location.pathname==="/"? "active":""}`} to="/">Home</Link></li>

      <li><Link className={`nav-item ${location.pathname==="/business"? "active":""}`} to="/business">Business</Link></li>

      <li><Link className={`nav-item ${location.pathname==="/entertainment"? "active":""}`} to="/entertainment">Entertainment</Link></li>

      <li><Link className={`nav-item ${location.pathname==="/general"? "active":""}`} to="general">General</Link></li>

      <li><Link className={`nav-item ${location.pathname==="/health"? "active":""}`} to="health">Health</Link></li>

      <li><Link className={`nav-item ${location.pathname==="/science"? "active":""}`} to="science">Science</Link></li>

      <li><Link className={`nav-item ${location.pathname==="/sports"? "active":""}`} to="sports">Sports</Link></li>

      <li><Link className={`nav-item ${location.pathname==="/technology"? "active":""}`} to="technology">Technology</Link></li>

    </ul>

    <div id="burger" onClick={(e)=>{
         const mobilenav= document.querySelector(".mobilenav")
         if(mobilenav.style.transform!=="translateY(0%)"){
          mobilenav.style.transform="translateY(0%)"
          console.log("if")
         }
         else{
          mobilenav.style.transform="translateY(-100%)"
          console.log("else")
         }
    }}>
      <div className="layer" id="layer1"></div>
      <div className="layer" id="layer2"></div>
      <div className="layer" id="layer3"></div>
    </div>

   
     </nav>

     <ul className="mobilenav">

<li><Link className={`mobilenav-item ${location.pathname==="/"? "active":""}`} to="/">Home</Link></li>

<li><Link className={`mobilenav-item ${location.pathname==="/business"? "active":""}`} to="/business">Business</Link></li>

<li><Link className={`mobilenav-item ${location.pathname==="/entertainment"? "active":""}`} to="/entertainment">Entertainment</Link></li>

<li><Link className={`mobilenav-item ${location.pathname==="/general"? "active":""}`} to="general">General</Link></li>

<li><Link className={`mobilenav-item ${location.pathname==="/health"? "active":""}`} to="health">Health</Link></li>

<li><Link className={`mobilenav-item ${location.pathname==="/science"? "active":""}`} to="science">Science</Link></li>

<li><Link className={`mobilenav-item ${location.pathname==="/sports"? "active":""}`} to="sports">Sports</Link></li>

<li><Link className={`mobilenav-item ${location.pathname==="/technology"? "active":""}`} to="technology">Technology</Link></li>

</ul>
    
  
    </>
  )
}

export default Navbar
