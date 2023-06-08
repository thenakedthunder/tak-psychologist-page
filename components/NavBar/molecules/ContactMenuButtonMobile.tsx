import styled from 'styled-components';

import PrimaryCTAButton from 'components/atoms/PrimaryCTAButton';
import PsychoLink from 'components/atoms/PsychoLink';
import { Grey010, Green100 } from 'components/styling/colors';

const ContactButtonDiv = styled.div`
  padding-top: 30px;

  @media screen and (min-width: 576px) {
    width: 496px;
    margin: auto;
  }
`;

const ContactLinkWrapper = styled.div`
  width: 100%;
`;

interface ContactMenuButtonMobileProps {
  onMenuItemClicked: () => void;
}

const ContactMenuButtonMobile = ({ onMenuItemClicked }: ContactMenuButtonMobileProps) => (
  <ContactButtonDiv>
    <ContactLinkWrapper onClick={onMenuItemClicked}>
      <PsychoLink href="/elerhetosegek">
        <PrimaryCTAButton
          text="Kapcsolat"
          textColor={Grey010}
          backgroundColor={Green100}
        />
      </PsychoLink>
    </ContactLinkWrapper>
  </ContactButtonDiv>
);

export default ContactMenuButtonMobile;
