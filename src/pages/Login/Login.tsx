import React, { FC, useCallback, useState } from 'react';
import { Flexbox, Form, Button, Input, Logo, FormGroup } from 'components';

export const Login: FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = useCallback((event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Flexbox direction="column" justify="center" align="center">
      <Logo href="/">Head In the Clouds</Logo>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
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
