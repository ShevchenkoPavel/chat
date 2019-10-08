import React from 'react';
import './users_bar.scss';
import { User } from '../user/user';
import { UserType } from '../../types/user';
import { lang } from '../../lang/EN';

export type UsersBarProps = {
  users: UserType[];
};

export const UsersBar = ({ users }: UsersBarProps): React.ReactElement => {
  return (
    <div className="users-bar">
      <div className="users-bar__header">{lang.USERS}</div>
      <div className="users__user-list">
        {users
          ? users.map(user => <User name={user.name} key={user.name} />)
          : null}
      </div>
    </div>
  );
};
