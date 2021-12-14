import React, { Component } from "react";
import Persons from "./components/Persons/Persons";

class App extends Component {
  state = {
    persons: [],
    person: "",
  };

  handleNamePerson = (event) => {
    let name = event.target.value;
    this.setState({ person: name });
  };
  handleNewPerson = () => {
    const persons = [...this.state.persons];
    const person = {
        id: Math.floor(Math.random() * 30),
        fullname: this.state.person,
    }
    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      this.setState({ persons, person: "" });
    }
  };
  handleDeletePerson = (id) => {
    // filter
    const persons = [...this.state.persons];
    const filtredPersons = persons.filter((p) => p.id !== id);
    this.setState({ persons: filtredPersons });
  };
  handleChangeName = (event, id) => {
    const { persons: allPersons } = this.state;
    const personIndex = allPersons.findIndex((person) => person.id === id);
    const person = allPersons[personIndex];
    person.fullname = event.target.value;
    const persons = [...allPersons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  render() {
    const { persons } = this.state;

    return (
      <div className="rtl text-center">
        <div className="alert alert-info">
          <h2>لیست اشخاص</h2>
        </div>
        <h5 className="alert alert-light">
          تعداد :{" "}
          <span className={ (persons.length >= 1) ? "badge badge-success badge-pill" : "badge badge-danger badge-pill" }>
            {persons.length}{" "}
          </span>
        </h5>
        <div className="m-2 p-2">
          <form
            className="form-inline justify-content-center"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="input-group">
              <input
                type="text"
                placeholder="اسم بهم بده"
                className="form-control"
                onChange={this.handleNamePerson}
                value={this.state.person}
              />
              <div className="input-group-prepend">
                <button
                  type="submit"
                  className="btn btn-sm btn-success fa fa-plus-circle pt-2 pb-2 mx-1"
                  onClick={this.handleNewPerson}
                ></button>
              </div>
            </div>
          </form>
        </div>
        <Persons
          listPersons={persons}
          personDelete={this.handleDeletePerson}
          personChange={this.handleChangeName}
        />
      </div>
    );
  }
}

export default App;
