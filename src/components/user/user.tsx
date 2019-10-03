import React from 'react';
import './user.scss';

export type UserType = {
  name: string;
};

export const User = ({ name }: UserType) => {
  return (
    <div className="user">
      <div className="user__status" />
      <div>{name}</div>
    </div>
  );
};
