import React from 'react';
import axios from 'axios';

// ccc - create class component
class FigureSkaterForm extends React.Component {
    
    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        strength: 0,
        endurance: 0,
        speed: 0,
        tactical: 0,
        ability: 0,
        technique: 0,
        couch: "",
        category: "",
    };


    handleSubmit(event) {
        event.preventDefault(); // Prevent refreshing browser automatically

        const updatedFigureSkater = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            strength: this.state.strength,
            endurance: this.state.endurance,
            speed: this.state.speed,
            tactical: this.state.tactical,
            ability: this.state.ability,
            technique: this.state.technique,
            couch: this.state.couch,
            category: this.state.category,

        }

        axios.post('http://localhost:4000/figureSkaters', updatedFigureSkater)
        .then((res) => {
            console.log(res);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    }

    render() { 
        return (
            <div className="row">
                <h3 className="center">Add New Iceskater</h3>
                <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" value={this.state.firstName} name="firstName" onChange={this.handleChange} type="text"/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange} type="text"/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} type="text"/>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" name="email" value={this.state.email} onChange={this.handleChange} type="email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="strength" name="strength" value={this.state.strength} onChange={this.handleChange} type="number"/>
                            <label htmlFor="strength">Strength</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="endurance" name="endurance" value={this.state.endurance} onChange={this.handleChange} type="number"/>
                            <label htmlFor="endurance">Endurance</label>
                        </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6">
                            <input id="speed" name="speed" value={this.state.speed} onChange={this.handleChange} type="number"/>
                            <label htmlFor="speed">Speed</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="tactical" name="tactical" value={this.state.tactical} onChange={this.handleChange} type="number"/>
                            <label htmlFor="tactical">Tactical</label>
                        </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6">
                            <input id="ability" name="ability" value={this.state.ability} onChange={this.handleChange} type="number"/>
                            <label htmlFor="ability">Ability</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="technique" name="technique" value={this.state.technique} onChange={this.handleChange} type="number"/>
                            <label htmlFor="technique">Technique</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="couch" name="couch" value={this.state.couch} onChange={this.handleChange} type="text"/>
                            <label htmlFor="couch">Couch</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="category" name="category" value={this.state.category} onChange={this.handleChange} type="text"/>
                            <label htmlFor="category">Category</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit"
                            name="action">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default FigureSkaterForm;