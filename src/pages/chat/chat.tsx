import React, { useState } from 'react';
import './chat.scss';
import MockUsers from '../../utils/mock/users.json';
import MockMessages from '../../utils/mock/messages.json';

import { Container, Row, Col } from 'react-bootstrap';

import { UserType } from '../../types/user';
import { MessageType } from '../../types/message';

import { UsersBar } from '../../components/users_bar/users_bar';
import { MessagesWindow } from '../../components/messages_window/messages_window';

export function Chat(): React.ReactElement {
  const [users] = useState<UserType[]>(MockUsers.users);
  const [messages] = useState<MessageType[]>(MockMessages.messages);

  return (
    <Container className="chat__container noPadding">
      <Row noGutters className="chat__container__content">
        <Col xs={4} className="chat__container__content__column">
          <UsersBar users={users} />
        </Col>
        <Col className="chat__container__content__column">
          <MessagesWindow messages={messages} />
        </Col>
      </Row>
    </Container>
  );
}
