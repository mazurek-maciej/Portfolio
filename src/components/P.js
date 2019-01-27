import styled from 'styled-components';

const P = styled.p`
  align-self: flex-end;
  width: 100%;
  margin: 0;
  color: ${({theme, white}) => (white ? theme.colors.$white : theme.colors.$p)};
  display: ${props => (props.bottom ? 'flex' : null)};
  flex-direction: ${props => (props.bottom ? 'column' : null)};
  align-items: ${props => (props.bottom ? 'center' : null)};
`;

export default P;
