import React from 'react';
import { UserProps } from '@/interfaces';

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Address: {user.address.street}, {user.address.suite}, {user.address.city} {user.address.zipcode} {user.address.geo.lat}, {user.address.geo.lng }</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name} {user.company.catchPhrase} {user.company.bs}</p>
    </div>
  );
};

export default UserCard;
