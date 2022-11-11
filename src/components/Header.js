import React from "react";
import "./styles.css";

export default function Header (){
    return(
        <header className="header">
            <img src="./images/troll-face.png" 
                alt="This is a troll img"
                className="header--image" 
            />
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">Astro-dynamics </h4>
        </header>
    )
}1