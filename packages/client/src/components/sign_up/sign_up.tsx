import React, { useState } from 'react';
import './sign_up.scss';

import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';

import { useHandleInput } from '../../utils/useHandleInput';
import { AuthButton } from '../auth_button/auth_button';

export function SignUp(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSetEmail = useHandleInput(setEmail);
  const handlePassword = useHandleInput(setPassword);

  function validateForm(): boolean {
    return email.length > 0 && password.length > 0;
  }

  return (
    <form className="hello-form">
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
      <AuthButton title={'Submit'} isEnabled={validateForm} />
    </form>
  );
}
