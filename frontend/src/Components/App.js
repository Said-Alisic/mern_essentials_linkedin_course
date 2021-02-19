import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import PlayerForm from './Player/PlayerForm';
// use alt form for quick editing

class App extends React.Component {
  constructor(props) {
    super(props); // assigns props to constructor
    this.state = {
      players: [],
      currentPlayer: {},
    }
    // bind function to constructor
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.deleteCurrentPlayer = this.deleteCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/players';

    // axios uses promises
    axios.get(url)
      .then((Response) => {
        this.setState({
          players: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    })
  }

  deleteCurrentPlayer(player_id) {
    axios.delete("http://localhost:4000/player/" + player_id)
  }

  

  /*// Delete player by using axios and a delete button

   */

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
        <nav>
          <div className="nav-wrapper purple darken-3">
            <a href="/" className="brand-logo center">Iceskating Management</a>
          </div>
        </nav>
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={this.state.players}
            updateCurrentPlayer={this.updateCurrentPlayer}/>
            </div>
          <div className="col s9"><PlayerSingle player={this.state.currentPlayer}  
            deleteCurrentPlayer={this.deleteCurrentPlayer}/></div>
        </div>
        <div className="row">
          <div className="col s12"><PlayerForm/></div>
        </div>   
      </div>
    );
  }
}


export default App;
