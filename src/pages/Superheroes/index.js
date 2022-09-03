import React from 'react'
import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Superheroes = () => {
  return (
    <div>
    <Header/>

<h1>SuperHeroes</h1>
<section>
   
    <div className="item">
        <h2>Ant-Man</h2> 
        <img src='https://m.media-amazon.com/images/M/MV5BNzg4MDYwZDktZDI2Yy00NmJhLTg2ZWUtZjIwNzQ2MTgxMDIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' width="300px" alt="Ant-Man" />
        <p><strong>Pertenece a: <h3>marvel Entertainment</h3></strong></p>
        <p>
            Ant-Man is a 2015 American superhero film based on the Marvel Comics
            characters of the same name: Scott Lang and Hank Pym. Produced by
            Marvel Studios and distributed by Walt Disney Studios Motion Pictures,
            it is the 12th film in the Marvel Cinematic Universe (MCU).
        </p>
    </div>

    <div className="item">
        <h2>Black Panther</h2> 
        <img src='https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png'  width="300px"  alt="Black-Panther"/>
        <p><strong>Pertenece a: <h3>marvel Entertainment</h3></strong></p>
        <p>
            Black Panther is a 2018 American superhero film based on the Marvel Comics
            character of the same name. Produced by Marvel Studios and distributed by
            Walt Disney Studios Motion Pictures, it is the 18th film in the Marvel
            Cinematic Universe (MCU). The film was directed by Ryan Coogler, who co-wrote </p>
    </div>
    <div className="item">
        <h2>Captain America</h2> 
        <img src='https://www.denofgeek.com/wp-content/uploads/2021/01/webstory-captain-america-cover03.jpg' width="300px" alt="Captain America" />
        <p><strong>Pertenece a: <h3>marvel Entertainment</h3></strong></p>
        <p>
            Captain America: The First Avenger is a 2011 American superhero film based on the
            Marvel Comics character Captain America. Produced by Marvel Studios and distributed
            by Paramount Pictures,[N 1] it is the fifth film in the Marvel Cinematic Universe (MCU). </p>
    </div>
    <div className="item">
        <h2>Doctor Strange</h2> 
        <img src='https://i.annihil.us/u/prod/marvel/i/mg/9/f0/57fe4ef408a29/standard_incredible.jpg' width="300px" alt="Doctor Strange"/>
        <p><strong>Pertenece a: <h3>Marvel Entertainment</h3></strong></p>
        <p>
            Doctor Strange is a 2016 American superhero film based on the Marvel Comics character
            of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios
            Motion Pictures, it is the 14th film in the Marvel Cinematic Universe (MCU).
        </p>
    </div>
    <div className="item">
        <h2>Hawkeye</h2> 
        <img src='https://qph.cf2.quoracdn.net/main-qimg-6c46575011382759cb92fd4bbd1ebd90-lq' width="300px" alt="Hawkeye"/>
        <p><strong>Pertenece a: <h3>Marvel Entertainment</h3></strong></p>
        <p>
            Hawkeye is an American television miniseries created by Jonathan Igla for the streaming
            service Disney+, based on Marvel Comics featuring the characters Clint Barton / Hawkeye
            and Kate Bishop / Hawkeye. 
        </p>
    </div>
    <div className="item">
        <h2>Iron Man</h2> 
        <img src='https://www.pinkvilla.com/imageresize/ironmansocial_1.jpg?width=752&format=webp&t=pvorg' width="300px" alt="Iron Man"/>
        <p><strong>Pertenece a: <h3>Marvel Entertainment</h3></strong></p>
        <p>
            Iron Man is a superhero appearing in American comic books published by Marvel Comics.
            The character was co-created by writer and editor Stan Lee, developed by scripter
            Larry Lieber, and designed by artists Don Heck and Jack Kirby.  
        </p>
    </div>
    <div className="item">
        <h2>Uatu</h2> 
        <img src='https://cdnb.artstation.com/p/assets/images/images/026/414/003/large/manuel-marroquin-2-ww-fotor.jpg?1588712292' width="300px" alt="Uatu"/>
        <p><strong>Pertenece a: <h3>Marvel Entertainment</h3></strong></p>
        <p>
            Uatu, a menudo conocido simplemente como El Vigilante, es un personaje de ficción
            que aparece en los cómics estadounidenses publicados por Marvel Comics. Acreditado
            en Stan Lee y Jack Kirby, apareció por primera vez en The Fantastic Four # 13  
        </p>
    </div>
    <div className="item">
        <h2>Spider-Man</h2> 
        <img src='https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' width="300px" alt="Spider-man"/>
        <p><strong>Pertenece a: <h3>Marvel Entertainment</h3></strong></p>
        <p>
            Spider-Man, comic-book character who was the original everyman superhero.
            In Spider-Man’s first story, in Marvel Comics’ Amazing Fantasy, no. 15 (1962),
            American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider 
        </p>
    </div>
    
</section>
<Footer/>
    </div>
  )
}

export default Superheroes