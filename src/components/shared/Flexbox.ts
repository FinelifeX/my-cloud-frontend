import styled from 'styled-components';

interface FlexboxProps {
  justify?:
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';
  align?: 'center' | 'stretch' | 'baseline' | 'flex-start' | 'flex-end';
  padding?: string;
  wrap?: boolean;
  direction?: 'row' | 'column';
}

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  box-sizing: border-box;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  padding: ${(props) => props.padding || '0'};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'no-wrap')};
  height: 100%;
  width: 100%;
`;
