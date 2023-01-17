import React from 'react';
import styled from 'styled-components';

import { IoIosRose } from 'react-icons/io';

import { Grey010 } from 'components/styling/colors';
import { DefaultParagraph } from 'components/atoms/typography.styles';

const MobileLeftDiv = styled.div`
    background-color: ${Grey010};
    display: grid;
    grid-template-columns: 36px 1fr; 
    cursor: pointer;
`;

const LogoDiv = styled.div`
    padding: 8px 8px 8px 0;
`;

const NameParagraph = styled(DefaultParagraph)`
    font-weight: 700;
`;

const LogoAndNameMobile = () => (
  <MobileLeftDiv>
    <LogoDiv><IoIosRose size={28} /></LogoDiv>
    <div>
      <div>
        <NameParagraph>Hont-Gáspár Anita</NameParagraph>
      </div>
      <div>
        <DefaultParagraph>Pszichológus</DefaultParagraph>
      </div>
    </div>
  </MobileLeftDiv>
);

export default LogoAndNameMobile;
