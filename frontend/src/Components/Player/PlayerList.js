import React from 'react';

// sfc
const PlayerList = (props) => {

    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Iceskaters</h4></li>
            {props.players.map((item) => (
                <div className="collection-item" key={item._id}>
                    <a href="#!" onClick={props.updateCurrentPlayer.bind(this, item)}> 
                    <h5>{item.firstName} {item.lastName}</h5>
                    </a>     
                </div>
            ))}
        </ul>
    </div> 
    );
}
 
export default PlayerList;
