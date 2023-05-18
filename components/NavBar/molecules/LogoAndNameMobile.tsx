import styled from 'styled-components';
import { IoIosRose } from 'react-icons/io';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Blue100, Green050 } from 'components/styling/colors';
import PsychoLink from 'components/atoms/PsychoLink';

const MobileLeftDiv = styled.div`
    background-color: inherit;
    display: grid;
    grid-template-columns: 36px 1fr; 
`;

const LogoDiv = styled.div`
    padding: 8px 8px 8px 0;
`;

const NameParagraph = styled(DefaultParagraph)`
    font-weight: 700;
`;

const LogoAndNameMobile = () => (
  <PsychoLink href="/">
    <MobileLeftDiv>
      <LogoDiv><IoIosRose size={28} color={Blue100} /></LogoDiv>
      <div>
        <div>
          <NameParagraph textColor={Green050}>Hont-Gáspár Anita</NameParagraph>
        </div>
        <div>
          <DefaultParagraph textColor={Green050}>Pszichológus</DefaultParagraph>
        </div>
      </div>
    </MobileLeftDiv>
  </PsychoLink>
);

export default LogoAndNameMobile;
