import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

// eslint-disable-next-line require-jsdoc
function App() {
    return (
        <div className="formContainer">
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}
export default App;
