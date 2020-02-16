import styled from 'styled-components';

type FormGroupProps = {
  centered?: boolean;
};

export const FormGroup = styled.div<FormGroupProps>`
  margin: 8px 0;
  text-align: ${(props) => (props.centered ? 'center' : 'unset')};
`;
