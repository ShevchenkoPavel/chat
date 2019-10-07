import React, { useState } from 'react';
import './chat.scss';
import MockUsers from '../../utils/mock/users.json';

import { Container, Row, Col } from 'react-bootstrap';

import { UsersBar } from '../../components/users_bar/users_bar';
import { UserType } from '../../types/user';

export function Chat(): React.ReactElement {
  const [users] = useState<UserType[]>(MockUsers.users);

  return (
    <Container
      className="chat__container"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <Row noGutters className="chat__container__content">
        <Col xs={4}>
          <UsersBar users={users} />
        </Col>
        <Col>MessagesWindow</Col>
      </Row>
    </Container>
  );
}
