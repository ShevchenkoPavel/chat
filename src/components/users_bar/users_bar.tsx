import React from 'react';
import './users_bar.scss';
import { User } from '../user/user';
import { UserType } from '../../types/user';

export type UsersBarProps = {
  users?: UserType[];
};

export const UsersBar = ({ users }: UsersBarProps): React.ReactElement => {
  return (
    <div className="users-bar">
      <div className="users-bar__header">users</div>
      <div className="users__user-list">
        {users
          ? users.map(user => <User name={user.name} key={user.name} />)
          : null}
      </div>
    </div>
  );
};
