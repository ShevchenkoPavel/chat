import React from 'react';
import './message.scss';
import { MessageType } from '../../types/message';

type Props = {
  message: MessageType;
};

export const Message = ({ message }: Props): React.ReactElement => {
  return (
    <div className="message">
      <div className="message__author">{message.author}</div>
      <div className="message__content">{message.content}</div>
    </div>
  );
};
