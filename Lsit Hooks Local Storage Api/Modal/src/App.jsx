// src/App.js
import React, { useState } from 'react';
import Login from './Modal/Login';
import Register from './Modal/Register';
import './index.css';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setShowLogin(true)}
                >
                    Open Login Modal
                </button>
                <Login showLogin={showLogin} setShowLoginModal={setShowLogin} />
            </div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setShowRegister(true)}
                >
                    Open Register Modal
                </button>
                <Register showRegister={showRegister} setShowRegisterModal={setShowRegister} />
            </div>
        </>
    );
}

export default App;
