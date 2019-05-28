import styled from 'styled-components';
import { media } from '../../utils/media';
import { theme } from '../../utils/theme';

const Subheading = styled.h2`
  font-size: ${theme.size.h3};
  font-weight: ${theme.font.bold};
  color: ${props => (props.projects ? '#F9F9F9' : null)};
  margin: ${props =>
    props.about ? '0 0 .5rem 0' : props.technologies ? '1rem 0 .5rem 0' : 0};
  margin-left: ${props =>
    props.projects ? '16px' : props.projectsTitle ? '16px' : '0'};
  margin-bottom: ${props => (props.projects ? '4px' : null)};
  border-bottom: ${({ underline }) =>
    underline ? `2px solid hsl(203, 55%, 30%)` : null};
  ${media.phone`
    font-size: ${props => (props.projects ? '1.2rem' : '1.5rem')};
  `};
`;

export default Subheading;
