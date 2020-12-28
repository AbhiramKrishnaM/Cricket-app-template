import React from 'react';
import '../Css/App.css'
const Stats = () =>{
    return(
        <div className="Stats">
            <div className="Stats-key">
            <h4 className="key-color">Icc Rank</h4>
            <h4 className="key-color">Matches</h4>
            <h4 className="key-color">Innings</h4>
            <h4 className="key-color">Runs</h4>
            <h4 className="key-color">50/100s</h4>
            </div>
            <div className="Stats-value">
            <h4>1st</h4>
            <h4>500</h4>
            <h4>496</h4>
            <h4>2000</h4>
            <h4>43/48</h4>
            </div>
        </div>
        
    )
}


export default  Stats;