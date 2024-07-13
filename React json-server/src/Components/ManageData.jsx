import React,{useState, useEffect} from 'react';
import axios from 'axios';

const ManageData = () => {
  const [FetchData, setFetchData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8888/data`)
      .then((response) => {
        setFetchData(response.data);
      })
      .catch((error) => {
        console.errorn;
      });
  }, [FetchData]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8888/data/${id}`)
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };
 
  return (
    <>
      <h1>Manage Your Data</h1>
      <div className="w-full mx-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 border">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Eail</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {FetchData.map((item, index) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{item.names}</td>
                <td className="border px-4 py-2">{item.number}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageData;
