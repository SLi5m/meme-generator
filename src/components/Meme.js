import React from "react";
import "./styles.css";
import memesData from "../memesData";


function getMemeImage () {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
}

export default function Meme () {
    return(
        <main>
            <div className="form">
                <input type="text" 
                    placeholder="Top-text" 
                    className="form--input"
                    />
                <input type="text" 
                    placeholder="Bottom-text" 
                    className="form--input"
                    />
                <button 
                    className="form--button" onClick={getMemeImage}>
                        Get a new meme image
                </button>
            </div>
        </main>

    )
}