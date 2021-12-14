import React, { Component } from 'react';
import Persons from './components/Persons/Persons';

class App extends Component{
    state = {
        persons: [],
        person: ""
    };

    handleNamePerson = (event) => {
        let name = event.target.value;
        this.setState({ person: name });
    };
    handleNewPerson = () => {
        const persons = [...this.state.persons];
        persons.push({
            id: Math.floor(Math.random() * 30),
            fullname: this.state.person
        });
        this.setState({ persons, person: "" });
    };
    handleDeletePerson = (id) => {
        // filter
        const persons = [...this.state.persons];
        const filtredPersons = persons.filter(p => p.id !== id);
        this.setState({ persons: filtredPersons });
    };
    handleChangeName = (event, id) => {
        const { persons: allPersons } = this.state;
        const personIndex = allPersons.findIndex(person =>  person.id === id );
        const person = allPersons[personIndex];
        person.fullname = event.target.value;
        const persons = [...allPersons];
        persons[personIndex] = person;
        this.setState({ persons });
    }

    render() {
        const { persons } = this.state;

        const titleStyle = {
            width: "100%",
            padding: "1rem",
            backgroundColor: "#516BEB",
            color: "#fff",
            fontSize: "1.2rem",
            margin: "1rem 0"
        };

        return (
            <div style={{ textAlign: "center" }}>
                <h2 style={titleStyle}>لیست اشخاص</h2>
                <h4 style={{ backgroundColor: "#eee", padding:"1rem 0", margin:"1rem 0" }}>تعداد : {persons.length}</h4>
                <div>
                    <input type="text" placeholder='نام شخص' style={{padding:"3px 4px 3px 0", marginBottom: "0.5rem"}} onChange={this.handleNamePerson} value={this.state.person}/>
                    <button className='btn btn-sm btn-success fa fa-plus-circle pt-2 pb-2 mx-2' onClick={this.handleNewPerson}></button>
                </div>
                <Persons listPersons={persons} personDelete={this.handleDeletePerson} personChange={this.handleChangeName}/>
            </div>
        )
    }
}

export default App
