import React from 'react';
import Person from './Person';

const Persons = ({ listPersons, personDelete, personChange }) => {
    return (
        <div>
            { listPersons.map(person => (
                <Person key={person.id} fullname={person.fullname} deleted={() => personDelete(person.id)} changed={(event) => personChange(event, person.id)}/>
            )) }
        </div>
    )
}

export default Persons