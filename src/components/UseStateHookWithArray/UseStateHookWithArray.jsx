import React, { useState } from 'react';
import '../UseStateHookWithArray/UseStateHookWithArray.css';
import data from '../UseStateHookWithArray/data';

const UseStateHookWithArray = () => {

    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let updateData = people.filter((person) => person.id !== id);
        setPeople(updateData);
    }

    return (
        <>
            <ul className="list-items">
                {
                    people.map((person) => {
                        const { id, name } = person;
                        return <li className="list-item" key={id}>
                            {name}
                            <button className="remove-btn" onClick={() => removeItem(id)}>remove</button>
                        </li>;
                    })
                }
                <button className="btn" onClick={()=> setPeople([])}>
                    clear items
                </button>
            </ul>

        </>
    )
}

export default UseStateHookWithArray;

