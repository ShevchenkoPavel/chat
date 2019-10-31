import React from 'react';
import './messages_window.scss';

import { Button, Col, Form, Row } from 'react-bootstrap';
import { lang } from '../../lang/EN';

import { Message } from '../message/message';
import { MessageType } from '../../types/message';

export type MessageWindowProps = {
  messages: MessageType[];
};

export const MessagesWindow = ({
  messages
}: MessageWindowProps): React.ReactElement => {
  return (
    <div className="messages-window">
      <div className="messages-window__window">
        {//TODO: replace message_id instead index in key
        messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
      <Form>
        <Form.Group controlId="messageForm">
          <Row noGutters>
            <Col xs={9}>
              <Form.Control placeholder={lang.INPUT_MESSAGE_PLACEHOLDER} />
            </Col>
            <Col xs={3}>
              <Button block variant="primary">
                Send
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};
