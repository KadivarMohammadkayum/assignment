import React from 'react';

const Register = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center text-start">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name :</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email :</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4"> 
            <label className="block text-gray-700 mb-2">Password :</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Register</button>
        </form>
        <button onClick={onClose} className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg">Close</button>
      </div>
    </div>
  );
};

export default Register;
