import React, { useState } from 'react';
import './hello.scss';

import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

import { useHandleInput } from '../../utils/useHandleInput';

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
