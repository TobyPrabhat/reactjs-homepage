import React from 'react'
import Logo from "../Images/logo.svg"
import Fire from "../Images/fire.svg"
import Profile from "../Images/profile.jpg"
import "./navbar.css"
const navbar = () => {
  const toggle = () =>{
    const LeftP = document.getElementById("lf");
    if(LeftP.style.display === "initial"){
      LeftP.style.display = "none";
    }
    else{
      LeftP.style.display = "initial";
    }
  }
  return (
    <div className='Navbar'>
      <div>
      <button className='Hamburger'
      onClick={toggle}><i className="fa-solid fa-bars"></i></button>
      <div className='LeftPortion' id='lf'>
      <div className='Logo'>
         <img src = {Logo} alt="Logo"/>
      </div>
      <div className='socialInfo'>
        <div className = "socialInfoList">
        {/* eslint-disable-next-line */}
          <a href='#'>Nav Text</a>
          {/* eslint-disable-next-line */}
          <a href='#'>Nav Text One</a>
          {/*eslint-disable-next-line */}
          <a href='#'>Nav Text Two</a>
          {/* eslint-disable-next-line*/}
          <a href='#'>Contact us</a>
        </div>
      </div>
      </div>
      </div>
      <div className='userImage'>
        <span><img src={Fire} alt="Fire"/></span>
        <img src= {Profile} alt="Profile" className='userProfile' />
      </div>
    </div>
  )
}

export default navbar
