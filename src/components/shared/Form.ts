import styled from 'styled-components';
import { FormGroup } from './FormGroup';
import { Input } from './Input';

type FormProps = {
  inline?: boolean;
};

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: ${(props) => (props.inline ? 'row' : 'column')};
  justify-content: space-around;
  width: ${(props) => (props.inline ? '100%' : '30%')};

  @media (max-width: 768px) {
    width: 60%;
  }

  ${FormGroup} {
    display: ${(props) => (props.inline ? 'inline-block' : 'block')};
    width: 100%;

    ${Input} {
      display: ${(props) => (props.inline ? 'inline-block' : 'block')};
      width: ${(props) => (props.inline ? 'unset' : '100%')};
      margin: 4px 0;
      box-sizing: border-box;
    }

    & label {
      display: ${(props) => (props.inline ? 'inline-block' : 'block')};
      width: ${(props) => (props.inline ? 'unset' : '100%')};
      margin: 4px 0;
    }
  }
`;
