import React from 'react'; // imr

// sfc
const FigureSkaterSingle = (props) => {

  
    return (
        <div className="row">
          <div className="col s12">
              <div className="card">
              <div className="card-image">
              <img src="figureSkaterAnime.jpg" alt="Viktor Nikiforov Image" style={{maxWidth: '1500px', maxHeight: '600px', minWidth: '150px', minHeight: '40px'}}/>
              <span className="card-title" >
                <h4 className="deep-purple-text text-bold">{props.figureSkater.firstName} {props.figureSkater.lastName}</h4>
              </span>
          </div>
          <div className="card-content ">
            <h5>Phone: {props.figureSkater.phone} - Email: {props.figureSkater.email}</h5>
            <h5>Strength: {props.figureSkater.strength} - Endurance: {props.figureSkater.endurance}</h5>
            <h5>Speed: {props.figureSkater.speed} - Tactical: {props.figureSkater.tactical}</h5>
            <h5>Ability: {props.figureSkater.ability} - Technique: {props.figureSkater.technique}</h5>
          </div>
          <div className="card-action">
              <h5>Couch: {props.figureSkater.couch}</h5>
              <h5>Category: {props.figureSkater.category}</h5>
              <div className="card-content right-align">
                <button className="btn btn-large waves-effect waves-light red" 
                onClick={props.deleteCurrentFigureSkater.bind(this, props.figureSkater._id)}>Remove Iceskater</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}
 
export default FigureSkaterSingle;

