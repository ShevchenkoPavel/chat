import { Button } from 'react-bootstrap';
import React from 'react';

type Props = {
  title: string;
  isEnabled: () => boolean;
};

export function AuthButton({ isEnabled, title }: Props): React.ReactElement {
  return (
    <Button block disabled={!isEnabled()} type="submit">
      {title}
    </Button>
  );
}
