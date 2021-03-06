import styled from 'styled-components';
import { media } from '../../utils/media';

const Description = styled.p`
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${props =>
    props.projects
      ? 'hsl(203, 80%, 90%)'
      : props.desc
      ? 'hsl(203, 80%, 90%)'
      : null};
  font-size: 1rem;
  margin: 0;
  padding: ${props => (props.desc ? '8px 4px 8px 16px' : '0')};
  ${media.phone`
    font-size: .8rem;
  `}
  a {
    color: hsl(203, 80%, 70%);
  }
`;

export default Description;
