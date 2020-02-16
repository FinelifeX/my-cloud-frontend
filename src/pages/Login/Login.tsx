import React, { FC } from 'react';
import { Flexbox, Form, Button, Input, Logo, FormGroup } from 'components';

export const Login: FC = () => {
  return (
    <Flexbox direction="column" justify="center" align="center">
      <Logo href="/">Head In the Clouds</Logo>
      <Form>
        <FormGroup>
          <label>E-mail:</label>
          <Input type="text" id="email" required />
        </FormGroup>
        <FormGroup>
          <label>Password:</label>
          <Input type="password" id="password" required />
        </FormGroup>
        <FormGroup centered>
          <Button type="submit">Log in</Button>
        </FormGroup>
      </Form>
    </Flexbox>
  );
};
