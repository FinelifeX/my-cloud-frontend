import styled from 'styled-components';

interface FlexItemProps {
  flex?: number;
}

export const FlexItem = styled.div<FlexItemProps>`
  flex: ${(props) => props.flex || 1};
`;
