import styled from 'styled-components';

import { IoIosRose } from 'react-icons/io';

import { Blue100, Green050 } from 'components/styling/colors';
import { DefaultParagraph } from 'components/atoms/typography.styles';

const LogoAndNameDesktopContainer = styled.div`
    display: grid;
    grid-template-columns: 36px auto;
    cursor: pointer;
`;

const LogoDiv = styled.div`
    padding: 16px 8px 0 0;
`;

const NameParagraph = styled(DefaultParagraph)`
    font-size: 20px;
    align-self: center;
`;

const BoldSpan = styled.span`
    font-weight: 700;
`;

const LogoAndNameDesktop = () => (
  <LogoAndNameDesktopContainer>
    <LogoDiv><IoIosRose size={28} color={Blue100} /></LogoDiv>
    <NameParagraph textColor={Green050}>
      <BoldSpan>Hont-Gáspár Anita - </BoldSpan>
      Pszichológus
    </NameParagraph>
  </LogoAndNameDesktopContainer>
);

export default LogoAndNameDesktop;
