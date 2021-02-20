import React from 'react';
import axios from 'axios';
import './App.css';
import FigureSkaterList from './FigureSkater/FigureSkaterList';
import FigureSkaterSingle from './FigureSkater/FigureSkaterSingle';
import FigureSkaterForm from './FigureSkater/FigureSkaterForm';

// use alt form for quick editing multiple fields in VCS

class App extends React.Component {
  constructor(props) {
    super(props); // assigns props to constructor
    this.state = {
      figureSkaters: [],
      currentFigureSkater: {},
    }
    // bind function to constructor
    this.updateCurrentFigureSkater = this.updateCurrentFigureSkater.bind(this);
    this.deleteCurrentFigureSkater = this.deleteCurrentFigureSkater.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/figureSkaters';

    // axios uses promises
    axios.get(url)
      .then((Response) => {
        this.setState({
          figureSkaters: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentFigureSkater(figureSkater) {
    this.setState({
      currentFigureSkater: figureSkater,
    })
  }

  deleteCurrentFigureSkater(id) {
    axios.delete("http://localhost:4000/figureSkater/" + id)
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
          <div className="col s3"><FigureSkaterList players={this.state.figureSkaters}
            updateCurrentFigureSkater={this.updateCurrentFigureSkater}/>
            </div>
          <div className="col s9"><FigureSkaterSingle player={this.state.currentFigureSkater}  
            deleteCurrentFigureSkater={this.deleteCurrentFigureSkater}/></div>
        </div>
        <div className="row">
          <div className="col s12"><FigureSkaterForm/></div>
        </div>   
      </div>
    );
  }
}


export default App;
