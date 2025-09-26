import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { UserProps, UserData } from '@/interfaces';
import UserCard from '../../components/common/UserCard';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserModal from '../../components/common/UserModal';

interface UsersIndexProps {
  users: UserProps[];
}

const Users: React.FC<UsersIndexProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (user: UserData) => {
    // Implement logic to add the new user to the list
    console.log('Adding user:', user);
    setNewUser(user);
  };

  return (
    <div>
      <Header />
      <h1>Users</h1>
      <button onClick={() => setModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add User
      </button>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <Footer />
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users;
