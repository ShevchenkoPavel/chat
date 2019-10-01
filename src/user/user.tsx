import React from 'react';
import './user.css';

type User = {
  name: string;
};

const User = ({ name }: User) => {
  return (
    <div className="users-bar">
      <header className="users__bar">Users</header>
      <div className="users__user-list">{name}</div>
    </div>
  );
};

export default User;
