import React, { useState } from "react";
import "../css/Return.css"

const Return = ()=>{
    const [emojis, setEmojis] = useState([
        { id: 1 },
        { id: 2},
        { id: 3},
        { id: 4 }
    ]);

    const handleEmojiClick = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((emoji) => {
                if (emoji.id === id) {
                    return { ...emoji, flipped: !emoji.flipped };
                }
                return emoji;
            });
        });
    };
    return(
        <div>
            <div className="game">
                <h1>Card game</h1>
                <div class="emoji-container">
                    <div className="emoji-row">
                        <div
                            className={`emoji ${emojis[0].flipped ? "flipped" : ""}`}
                            onClick={() => handleEmojiClick(emojis[0].id)}
                        >
                            <span>
                                {/* Code SVG pour le premier emoji */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="yellow"/>
                                    <circle cx="35" cy="40" r="7" fill="black"/>
                                    <circle cx="65" cy="40" r="7" fill="black"/>
                                    <path d="M35 60 Q50 80 65 60" stroke="black" stroke-width="4" fill="transparent"/>
                                </svg>
                            </span>
                        </div>
                        <div
                            className={`emoji ${emojis[1].flipped ? "flipped" : ""}`}
                            onClick={() => handleEmojiClick(emojis[1].id)}
                        >
                            <span>
                                {/* Code SVG pour le deuxième emoji */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                                    <path d="M50 80 Q70 10 90 40 Q80 55 50 80 Q20 55 10 40 Q30 10 50 80" fill="red"/>
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/*DEUXIEME*/}
                    <div className="emoji-row">
                    <div
                        className={`emoji ${emojis[2].flipped ? "flipped" : ""}`}
                        onClick={() => handleEmojiClick(emojis[2].id)}
                    >
                        <span>
                            {/* Code SVG pour le troisième emoji */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="black" stroke-width="2"/>
                                <polygon points="50 20 61.8 72.4 38.2 48.4 61.8 48.4 38.2 72.4" fill="yellow"/>
                            </svg>
                        </span>
                    </div>
                    <div
                        className={`emoji ${emojis[3].flipped ? "flipped" : ""}`}
                        onClick={() => handleEmojiClick(emojis[3].id)}
                    >
                        <span>
                            {/* Code SVG pour le quatrième emoji */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="yellow"/>
                                <circle cx="35" cy="40" r="7" fill="black"/>
                                <circle cx="65" cy="40" r="7" fill="black"/>
                                <path d="M35 65 Q50 45 65 65" stroke="black" stroke-width="4" fill="transparent"/>
                                <path d="M35 65 Q50 85 65 65" stroke="black" stroke-width="4" fill="transparent"/>
                            </svg>
                        </span>
                    </div>
                </div>
                    
                </div>


                    
    
                {/* <div className="emoji">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="yellow"/>
                            <circle cx="35" cy="40" r="7" fill="black"/>
                            <circle cx="65" cy="40" r="7" fill="black"/>
                            <path d="M35 60 Q50 80 65 60" stroke="black" stroke-width="4" fill="transparent"/>
                        </svg>
                    </span>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <path d="M50 80 Q70 10 90 40 Q80 55 50 80 Q20 55 10 40 Q30 10 50 80" fill="red"/>
                        </svg>
                    </span>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="black" stroke-width="2"/>
                                <polygon points="50 20 61.8 72.4 38.2 48.4 61.8 48.4 38.2 72.4" fill="yellow"/>
                        </svg>
                    </span>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="yellow"/><circle cx="35" cy="40" r="7" fill="black"/><circle cx="65" cy="40" r="7" fill="black"/><path d="M35 65 Q50 45 65 65" stroke="black" stroke-width="4" fill="transparent"/>
                                <path d="M35 65 Q50 85 65 65" stroke="black" stroke-width="4" fill="transparent"/>
                        </svg>
                    </span>
                </div> */}
            </div>
        </div>
    )
}

export default Return;