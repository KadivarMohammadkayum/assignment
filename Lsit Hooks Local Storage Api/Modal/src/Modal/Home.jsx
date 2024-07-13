import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Home = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <div className="App flex text-center mx-auto flex-col font-semibold">
      <div className='mt-16'>
        <h1 className='mb-3'>Modal Login Form</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setLoginOpen(true)}
        >
          Login
        </button>
      </div>

      <div className='mt-16'>
        <h1 className='mb-3'>Modal Register Form</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4"
          onClick={() => setRegisterOpen(true)}
        >
          Register
        </button>
      </div>


      <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <Register isOpen={isRegisterOpen} onClose={() => setRegisterOpen(false)} />
    </div>
  );
}

export default Home;
