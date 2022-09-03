import React from 'react'
import '../../App.css'
import { NavLink } from "react-router-dom";



const Header = () => {
  return (
    <header className="topnav">
       <nav>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="marvel">Marvel</NavLink>
        <NavLink to="dccomics">DCcomics</NavLink>
        <NavLink to="superheroes">SuperHeroes</NavLink>
        <NavLink to="superheroines">Superheroines</NavLink>
      </nav>
   
  </header>
    
      
     
  
      
    
  )
}

export default Header