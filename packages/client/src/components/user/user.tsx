import React from 'react';
import './user.scss';

import { Row } from 'react-bootstrap';

import { UserType } from '../../types/user';

export const User = ({ name }: UserType): React.ReactElement => {
  return (
    <Row className="user" noGutters={true}>
      <div className="user__status" />
      <div>{name}</div>
    </Row>
  );
};
