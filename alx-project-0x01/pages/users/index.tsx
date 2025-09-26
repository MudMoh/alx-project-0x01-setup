import React from 'react';
import Header from "@/components/layout/Header";

const UsersIndex: React.FC = () => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  return (
      <div>
        <Header />
        <h1>Users</h1>
       <ul>
         {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
       </ul>
    </div>
  );
};

export default UsersIndex;
