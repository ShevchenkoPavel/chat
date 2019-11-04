import React, { useState } from 'react';
import './chat.scss';
import MockUsers from '../../utils/mock/users.json';
import MockMessages from '../../utils/mock/messages.json';

import { Row, Col } from 'react-bootstrap';

import { UserType } from '../../types/user';
import { MessageType } from '../../types/message';

import { UsersBar } from '../../components/users_bar/users_bar';
import { MessagesWindow } from '../../components/messages_window/messages_window';
import { LayoutContainer } from '../../components/layout/layout';

export function Chat(): React.ReactElement {
  const [users] = useState<UserType[]>(MockUsers.users);
  const [messages] = useState<MessageType[]>(MockMessages.messages);

  return (
    <LayoutContainer className="chat__container" noPadding={true}>
      <Row noGutters className="chat__container__content">
        <Col xs={4} className="">
          <UsersBar users={users} />
        </Col>
        <Col xs={8} className="">
          <MessagesWindow messages={messages} />
        </Col>
      </Row>
    </LayoutContainer>
  );
}
