import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 p-4 border-r border-gray-300 h-screen">
      <h2 className="text-xl font-bold">Username</h2>
      <ul className="mt-4">
        <li className="my-2"><a href="#">Home</a></li>
        <li className="my-2"><a href="#">Profile</a></li>
        <li className="my-2"><a href="#">Messages</a></li>
      </ul>
    </div>
  );
};
