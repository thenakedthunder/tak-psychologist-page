import styled from 'styled-components';

import { H2 } from 'components/atoms/typography.styles';
import { Green100 } from 'components/styling/colors';
import Social from 'components/AboutMe/molecules/Social';

const HeaderContainer = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

interface Props {
  title: string;
  breakPoint: number;
}

const HeaderWithSocialLinks = ({ title, breakPoint }: Props) => (
  <HeaderContainer>
    <H2 color={Green100}>{title}</H2>
    <Social breakPoint={breakPoint} />
  </HeaderContainer>
);

export default HeaderWithSocialLinks;
