import React from 'react';
import './users_bar.css';
import User from '../user/user';

interface UserType {
  name: string;
}

export type UsersBarProps = {
  users?: UserType[];
};

export const UsersBar = ({ users }: UsersBarProps) => {
  return (
    <div className="users-bar">
      <header className="users__bar">Users</header>
      <div className="users__user-list">
        {users
          ? users.map(user => <User name={user.name} key={user.name} />)
          : null}
        {console.log(users)}
      </div>
    </div>
  );
};
