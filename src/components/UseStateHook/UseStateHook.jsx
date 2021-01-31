import React, { useState } from 'react';
import '../UseStateHook/UseStateHook.css';

const UseStateHook = () => {

    const [btnValue, setButtonValue] = useState(0);

    return (
        <div className="btn-wrapper">
             <button className="btn" onClick={() => {setButtonValue(btnValue + 1)}}>
                {btnValue}
            </button>
        </div>

    )
}

export default UseStateHook;

