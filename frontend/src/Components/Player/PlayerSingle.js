import React from 'react'; // imr

// sfc
const PlayerSingle = (props) => {

  
    return (
        <div className="row">
          <div className="col s12">
              <div className="card">
              <div className="card-image">
              <img src="imagestuff.jpg" alt="Image Stuff" style={{maxWidth: '1500px', maxHeight: '600px', minWidth: '150px', minHeight: '40px'}}/>
              <span className="card-title" >
                <h4 className="deep-purple-text text-bold">{props.player.firstName} {props.player.lastName}</h4>
              </span>
          </div>
          <div className="card-content ">
            <h5>Phone: {props.player.phone} - Email: {props.player.email}</h5>
            <h5>Strength: {props.player.strength} - Endurance: {props.player.endurance}</h5>
            <h5>Speed: {props.player.speed} - Tactical: {props.player.tactical}</h5>
            <h5>Ability: {props.player.ability} - Techniques: {props.player.techniques}</h5>
          </div>
          <div className="card-action">
              <h5>Couch: {props.player.couch}</h5>
              <h5>Category: {props.player.category}</h5>
              <div className="card-content right-align">
                <button className="btn btn-large waves-effect waves-light red" 
                onClick={props.deleteCurrentPlayer.bind(this, props.player._id)}>Remove Iceskater</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}
 
export default PlayerSingle;

