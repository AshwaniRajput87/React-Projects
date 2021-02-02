import React, { useState } from 'react';
import '../UseStateHookWithObject/UseStateHookWithObject.css';
import data from '../UseStateHookWithObject/Object';

const UseStateHookWithArray = () => {

    const [person, setPerson] = useState(data);

    const changeMessage = () => {
        setPerson({...person, message : 'Welcome in the React World!!!!'});
    }

    return (
        <>
            <ul className="list-items">
                <li className="list-item">{person.name}</li>
                <li className="list-item">{person.age}</li>
                <li className="list-item">{person.message}</li>
                <button className="btn" onClick={changeMessage}>
                    Change Message
                </button>
            </ul>
        </>
    )
}

export default UseStateHookWithArray;

