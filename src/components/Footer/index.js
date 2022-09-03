import React from 'react'

const Footer = () => {
  return (
    <footer className="container grid">
    <div className="cell">
        <h3>It may interest you:</h3>
        <p><a href="marvel.html"> *SuperHeroes most powerfuls</a></p>
        <p><a href="dccomics.html">*the sexiest superheroines </a></p>
        <p><a href="superheores">*why is hulk ver weak?</a></p>
    </div>
    <div className="cell">
       <h3>Created by hardcode</h3>
       <p><a href="juansdsfa@gmail.com">juansdsfa@gmail.com</a></p>
   </div>
    <div className="cell">
        <h3>Social Media:</h3>
        <img src="https://img.icons8.com/color/48/000000/facebook.png" alt='facebook'/>
        <img src="https://img.icons8.com/color/48/000000/tiktok--v1.png" alt='tiktok'/>
        <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt='youtube'/>

    </div>

   </footer>
  )
}

export default Footer