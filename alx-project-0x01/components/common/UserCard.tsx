import React from 'react';
import { UserProps } from '@/interfaces';

// interface UserCardProps {
//   user: UserProps;
// }

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website, address, company }) => {
  return (
    <div>
      <h2>{name} {id}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Address: {address?.street}, {address?.suite}, {address?.city} {address?.zipcode} {address?.geo?.lat}, {address?.geo?.lng}</p>
      <p>Company: {company?.name}</p>
    </div>
  );
};

export default UserCard;
