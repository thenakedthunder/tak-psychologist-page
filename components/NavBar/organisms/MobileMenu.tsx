import Link from 'next/link';
import styled from 'styled-components';

import StyledLink from 'components/atoms/StyledLink.styles';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import PrimaryCTAButton from 'components/molecules/PrimaryCTAButton';
import { Green050, Grey010 } from 'components/styling/colors';
import { menuItemsMobile } from 'components/NavBar/content/menuItems';

const MobileMenuContainer = styled.div`
    background-color: ${Grey010};
    padding: 30px 40px 40px;
    display: grid;
    grid-template-rows: repeat(5, 1fr) 92px;
    row-gap: 20px;
`;

const MobileMenuItem = styled(DefaultParagraph)`
    font-size: 20px;

    @media screen and (min-width: 576px) {
      margin: auto;
    }
`;

const ContactButtonDiv = styled.div`
  padding-top: 30px;

  @media screen and (min-width: 576px) {
    width: 496px;
    margin: auto;
  }
`;

const MobileMenu = () => (
  <MobileMenuContainer>
    {menuItemsMobile.map((item, index) => (
      <MobileMenuItem key={index} color={Green050}>
        <Link href="/" passHref>
          <StyledLink>
            {item}
          </StyledLink>
        </Link>
      </MobileMenuItem>
    ))}
    <ContactButtonDiv>
      <PrimaryCTAButton
        text="Kapcsolat"
        color={Grey010}
        backgroundColor={Green050}
      />
    </ContactButtonDiv>
  </MobileMenuContainer>
);

export default MobileMenu;
