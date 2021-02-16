import React from 'react'; // imr

// sfc
const  PlayerSingle = (props) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                <div className="card-image">
                <img src="imagestuff.jpg" alt="Image Stuff"/>
                <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
            </div>
            <div className="card-content">
              <p>Phone: {props.player.phone} - Email: {props.player.email}</p>
              <p>Strength: {props.player.strength} - Endurance: {props.player.endurance}</p>
              <p>Speed: {props.player.speed} - Tactical: {props.player.tactical}</p>
              <p>Ability: {props.player.ability} - Techniques: {props.player.techniques}</p>
            </div>
            <div className="card-action">
                <p>Team: {props.player.team}</p>
                <p>Couch: {props.player.isCouch}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PlayerSingle;

