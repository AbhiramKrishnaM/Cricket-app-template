import React from 'react';
import Stats from './stats';
import '../Css/App.css';

const PlayerCard = () => {
    return(
        <div className="playerCard">
            <div className="flex">
                <div className="PlayerName ">
                    <h1 className="Player-first-name">Virat</h1>
                    <h3>Kohli</h3>
                </div>
                <div className="Nation flex">
                    <h2>India</h2> 
                </div>
            </div>
            <div className="Stats-card">
                <Stats />
            </div>
            
        </div>
    )
}


export default PlayerCard;