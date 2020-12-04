import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Person.css';

const person = (props) => (
    <div className="Person" onClick={props.clicked}>
        <div className="Person_icon">
            <FontAwesomeIcon icon={faTimes} />
        </div>
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
        </div>
    </div>
);

export default person;