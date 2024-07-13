import axios from 'axios';
import React, { useRef } from 'react'
import Swal from 'sweetalert2';


const InputData = () => {

    const names = useRef(null);
    const number = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const FomrHandle = (e) => {
        e.preventDefault();
        const sendData = {
            names: names.current.value,
            number: number.current.value,
            email: email.current.value,
            password: password.current.value,
        };
        axios.post(`http://localhost:8888/data`, sendData)
            .then(() => {
                Swal.fire({
                    title: "Thanks",
                    text: "Your form added succeccfully",
                    icon: "succecc"
                });
            })
        e.target.reset();
    }

    return (
        <>
            <form onSubmit={FomrHandle} className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        ref={names}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mobileNumber" className="block text-gray-700 text-sm font-bold mb-2">Mobile Number :</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        ref={number}
                        autoComplete='off'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email ID :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        ref={email}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        ref={password}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default InputData
