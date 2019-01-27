import styled from 'styled-components';
import {media} from '../utils/media';

const Heading = styled.h1`
  font-size: 48px;
  ${media.phone`
    font-weight: ${({theme}) => theme.font.superbold};
    font-size: 2rem;
    margin-bottom: 1rem;
    padding-top: 10rem;
  `}
`;
export default Heading;
