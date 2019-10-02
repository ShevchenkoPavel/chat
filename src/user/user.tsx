import React from 'react';
import './user.css';

export type UserType = {
  name: string;
};

export const User = ({ name }: UserType) => {
  return (
    <div className="user">
      <div className="user__status" />
      <div className="user__name">{name}</div>
    </div>
  );
};

// export default User;
