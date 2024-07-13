import React from 'react'

const Home = () => {
    return (
        <>
            <div className='bg-slate-300 max-h-full' style={{height:"91vh"}}>
                <div className="pt-44 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4 text-blue-800">Welcome to My CRUD Operation</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        This is a simple CRUD application built with React.js and styled with Tailwind CSS.
                    </p>

                </div>
            </div>
        </>
    )
}

export default Home
