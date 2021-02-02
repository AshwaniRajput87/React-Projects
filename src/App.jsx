import React from 'react';

import UseStateHook from './components/UseStateHook/UseStateHook';
import UseStateHookWithArray from './components/UseStateHookWithArray/UseStateHookWithArray';
import UseStateHookWithObject from './components/UseStateHookWithObject/UseStateHookWithObject';

const App = () => {
    return (
        <div className="app-container">
            <UseStateHook />
            <UseStateHookWithArray />
            <UseStateHookWithObject />
        </div>
    );
};

export default App;



