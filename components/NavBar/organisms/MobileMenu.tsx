import styled from 'styled-components';

import PsychoLink from 'components/atoms/PsychoLink';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import { Green050, Grey010 } from 'components/styling/colors';
import { menuItemsMobile } from 'components/NavBar/content/menuItems';

const MobileMenuContainer = styled.div`
    background-color: ${Grey010};
    padding: 30px 40px 40px;
    display: grid;
    grid-template-rows: repeat(5, 1fr) 92px;
    row-gap: 20px;
    position: fixed;
    top: 83px;
    width: 100%;
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
        <PsychoLink href={item.link}>
          {item.title}
        </PsychoLink>
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
