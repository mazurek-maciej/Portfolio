import styled from 'styled-components';
import { media } from '../../utils/media';
import { theme } from '../../utils/theme';

const Heading = styled.h1`
  font-size: ${theme.size.h1};
  font-weight: ${theme.font.superbold};
  margin: 0;
  ${media.tablet`
    font-size: ${theme.size.h2};
  `}
  ${media.phone`
    font-size: ${theme.size.h3};
    margin-left: 0;
  `};
`;
export default Heading;
