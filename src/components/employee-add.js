import React, {Component} from 'react';

class EmpForm extends Component {

    constructor() {
        super();
        this.addEmployee = this
            .addEmployee
            .bind(this);
        this.handleFormField = this
            .handleFormField
            .bind(this);

        this.state = {
            first: '',
            second: '',
            type: ''
        };
    }

    addEmployee(event) {
        event.preventDefault();
    }

    handleFormField(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.addEmployee}>
                First Name<input
                    type="text"
                    name="first"
                    value={this.state.first}
                    onChange={this.handleFormField}
                    required/>
                Second Name<input
                    type="text"
                    name="second"
                    value={this.state.second}
                    onChange={this.handleFormField}
                    required/>
                Account Type<input
                    type="text"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleFormField}
                    required/>
                <button>Submit</button>
            </form>
        )
    }
}
export default EmpForm;