// src/components/ListView.js
import React from 'react';

const items = [
  "Use Array.map",
  "Not a for loop",
  "Give each item a unique key",
  "Avoid using array index as the key"
];

const ListView = () => {
  return (
    <div className="bg-green-200 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">The "React Way" to Render a List</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="bg-white rounded-full p-2 mr-2 text-teal-950">✔</span>
            <span className="bg-white p-2 rounded-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
