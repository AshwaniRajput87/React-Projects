import React from 'react';

import UseStateHook from './components/UseStateHook/UseStateHook';
import UseStateHookWithArray from './components/UseStateHookWithArray/UseStateHookWithArray';

const App = () => {
    return (
        <div className="app-container">
            <UseStateHook />
            <UseStateHookWithArray />
        </div>
    );
};

export default App;



