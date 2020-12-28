import React  from "react";


const TeamCard = ()=>{

    return(

        <div className="Team-Card flex">
            <div className="Team"><span className="Team-name">Fantasy Team 1</span></div>
            <div className="result-1 flex">
                <div className="prediction-result flex">
                    <h1>600</h1>
                    <h2 className="green">Predicted</h2>
                </div>
                <div className="prediction-result flex">
                    <h1>590</h1>
                    <h2 className="green">Scored</h2>
                </div>
            </div>
            <div className="result-2 flex">
                <div className="prediction-result-1  flex">
                    <h1>5 Players</h1>
                    <h2 className="green">Team A</h2>
                </div>
                <div className="prediction-result-1 flex">
                    <h1>6 Players</h1>
                    <h2 className="green">Team B</h2>
                </div>
            </div>
        </div>

    );

}

export default TeamCard;