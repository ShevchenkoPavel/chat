import React from 'react';
import './user.scss';

import { UserType } from '../../types/user';

export const User = ({ name }: UserType): React.ReactElement => {
  return (
    <div className="user">
      <div className="user__status" />
      <div>{name}</div>
    </div>
  );
};
