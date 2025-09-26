import React from 'react';
import { UserProps } from '@/interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border rounded-md p-4 m-2">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Address: {user.address?.street}, {user.address?.suite}, {user.address?.city} {user.address?.zipcode}</p>
      <p>Company: {user.company?.name}</p>
    </div>
  );
};

export default UserCard;
