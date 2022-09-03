class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="topnav">
      
        <a class="active" href="index.html">Home</a>
        <a href="marvel.html">Marvel</a>
        <a href="dccomics.html">DC comics</a>
        <a href="superheroes.html">SuperHeroes</a>
        <a href="superheroines.html">SuperHeroines</a>
        <a href="#contact">Contact</a>
    
    </header>
     `
    }
 }
 
 customElements.define('my-header', MyHeader)
 
 
 
 class MyContent extends HTMLElement{
     connectedCallback(){
         this.innerHTML = `
                 <h1> Home</h1>
      `
     }
  }
  
  customElements.define('my-content', MyContent)
 
  
 
  
 class MyFooter extends HTMLElement{
     connectedCallback(){
         this.innerHTML = `
         <footer class="container grid">
         <div class="cell">
             <h3>It may interest you:</h3>
             <p><a href="marvel.html"> *SuperHeroes most powerfuls</a></p>
             <p><a href="dccomics.html">*the sexiest superheroines </a></p>
             <p><a href="superheores">*why is hulk ver weak?</a></p>
         </div>
         <div class="cell">
            <h3>Created by hardcode</h3>
            <p><a href="juansdsfa@gmail.com">juansdsfa@gmail.com</a></p>
        </div>
         <div class="cell">
             <h3>Social Media:</h3>
             <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
             <img src="https://img.icons8.com/color/48/000000/tiktok--v1.png"/>
             <img src="https://img.icons8.com/color/48/000000/youtube-play.png"/>
    
         </div>
    
        </footer>
      `
     }
  }
  
  customElements.define('my-footer', MyFooter)
  
 
 