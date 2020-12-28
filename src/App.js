import './Css/App.css';
import PlayerCard from './Components/card';
import TeamCard  from './Components/Team';
function App() {
  return (
    <div className="Container">
      <h1 className="text-upper">Predicted Playing 11</h1>
      <div className="App flex-1">
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      </div>
      <h1 className="selected">Selected in match: <span className="bold"> 10</span><span className="light"> out of predicted </span><span className="bold">11</span></h1>
      <div className="Winning-prediction">
        <h1 className="winning-prediction">Winning Predictions</h1>
        <div className="box-prediction flex-1">
          <h1 className="Prediction flex">Predicted: <span className="nation">India</span></h1>
          <h1 className="Winner flex">Winner: <span className="nation">India</span></h1>
        </div>
      </div>
      <div className="team-card">
            <h1 className="team-card-heading">Fantasy Teams</h1>   
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />

      </div>
      
    </div>
    
  );
}

export default App;
