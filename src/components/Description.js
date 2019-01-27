import styled from 'styled-components';
import {media} from '../utils/media';

const Description = styled.p`
  font-weight: ${({theme}) => theme.font.regular};
  color: ${props => (props.projects ? 'hsl(203, 80%, 70%)' : null)};
  font-size: 1rem;
  margin: 0;
  margin-left: ${props => (props.projects ? '8px' : '0')};
  ${media.phone`
    font-size: .8rem;
  `}
`;

export default Description;
