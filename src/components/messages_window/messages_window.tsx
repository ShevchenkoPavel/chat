import React from 'react';
import './messages_window.scss';

import { Button, Form } from 'react-bootstrap';
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
        {messages
          ? messages.map((message, index) => (
              <Message message={message} key={index} />
            ))
          : null}
      </div>
      <Form>
        <Form.Group
          controlId="messageForm"
          className="messages-window__send-bar"
        >
          <Form.Control
            className="messages-window__send-bar__input"
            placeholder={lang.INPUT_MESSAGE_PLACEHOLDER}
          />
          <Button
            className="messages-window__send-bar__send-btn"
            variant="primary"
          >
            Send
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
