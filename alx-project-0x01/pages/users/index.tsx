import { GetStaticProps } from 'next';
import React from 'react';
import { UserProps } from '@/interfaces';
import UserCard from '../../components/common/UserCard';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface UsersIndexProps {
  users: UserProps[];
}

const Users: React.FC<UsersIndexProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <h1>Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users,
    }
  }
}

export default Users
