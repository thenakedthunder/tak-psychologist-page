import styled from 'styled-components';
import { IoIosRose } from 'react-icons/io';

import { DefaultParagraph } from 'components/atoms/typography.styles';
import { Blue010, Green050 } from 'components/styling/colors';
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

interface LogoAndNameMobileProps {
  onClicked: () => void;
}

const LogoAndNameMobile = ({ onClicked }: LogoAndNameMobileProps) => (
  <PsychoLink href="/">
    <MobileLeftDiv onClick={onClicked}>
      <LogoDiv><IoIosRose size={28} color={Blue010} /></LogoDiv>
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
