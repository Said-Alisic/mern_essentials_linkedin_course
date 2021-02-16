import React from 'react';
import axios from 'axios';

// ccc - create class component
class PlayerForm extends React.Component {
    
    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    };


    submitPlayer(event) {
        event.preventDefault(); // Prevent refreshing browser automatically

        const updatedPlayer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
        }

        axios.post('http://localhost:4000/players', updatedPlayer)
        .then((res) => {
            console.log(res);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
    }



    render() { 
        return (
            <div className="row">
                <h1 className="center">Add New Player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
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
                    <button className="btn waves-effect waves-light" type="submit"
                            name="action">Submit</button>
                </form>
            </div>
        );
    }
}
 
export default PlayerForm;