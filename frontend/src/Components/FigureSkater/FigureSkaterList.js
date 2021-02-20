import React from 'react';

// sfc
const FigureSkaterList = (props) => {

    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Figure Skaters</h4></li>
            {props.figureSkaters.map((figureSkater) => (
                <div className="collection-item" key={figureSkater._id}>
                    <a href="#!" onClick={props.updateCurrentFigureSkater.bind(this, figureSkater)}> 
                    <h5>{figureSkater.firstName} {figureSkater.lastName}</h5>
                    </a>     
                </div>
            ))}
        </ul>
    </div> 
    );
}
 
export default FigureSkaterList;
