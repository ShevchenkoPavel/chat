import React, { useState, useCallback } from 'react';
import './hello.scss';

import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlProps
} from 'react-bootstrap';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useHandleInput(handle: (value: string) => void) {
  return useCallback(
    (e: React.FormEvent<FormControlProps & FormControl>): void => {
      const fixedEventTarget = e.target as HTMLInputElement;
      handle(fixedEventTarget.value);
    },
    [handle]
  );
}

export function Hello(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetEmail = useHandleInput(setEmail);
  const handlePassword = useHandleInput(setPassword);

  function validateForm(): boolean {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="Login">
      <form>
        <FormGroup controlId="email">
          <FormLabel column={false}>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={handleSetEmail}
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel column={false}>Password</FormLabel>
          <FormControl
            value={password}
            onChange={handlePassword}
            type="password"
          />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
