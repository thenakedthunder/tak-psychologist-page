import styled from 'styled-components';

import { IoIosRose } from 'react-icons/io';

import { Blue100, Green050 } from 'components/styling/colors';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import PsychoLink from 'components/atoms/PsychoLink';

const LogoAndNameDesktopContainer = styled.div`
  display: grid;
  grid-template-columns: 36px auto;
`;

const LogoDiv = styled.div`
  padding-right: 8px;
`;

const NameParagraph = styled(DefaultParagraph)`
  font-size: 20px;
`;

const BoldSpan = styled.span`
  font-weight: 700;
`;

const LogoAndNameDesktop = () => (
  <PsychoLink href='/'>
    <LogoAndNameDesktopContainer>
      <LogoDiv><IoIosRose size={28} color={Blue100} /></LogoDiv>
      <NameParagraph color={Green050}>
        <BoldSpan>Hont-Gáspár Anita - </BoldSpan>
        Pszichológus
      </NameParagraph>
    </LogoAndNameDesktopContainer>
  </PsychoLink>
);

export default LogoAndNameDesktop;
