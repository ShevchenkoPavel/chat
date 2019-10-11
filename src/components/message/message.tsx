import React from 'react';
import './message.scss';

type Props = {
  author: string;
  content: string;
};

export const Message = ({ author, content }: Props): React.ReactElement => {
  return (
    <div className="message">
      <div className="message__author">{author}</div>
      <div className="message__content">{content}</div>
    </div>
  );
};
