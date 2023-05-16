import styled from 'styled-components';

import { Grey010 } from 'components/styling/colors';
import NavBar from 'components/NavBar/organisms/NavBar';
import ReservationInfo from 'components/Contact/organisms/ReservationInfo';
import HeaderWithSocialLinks from 'components/molecules/HeaderWithSocialLinks';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import RightSide from 'components/Contact/organisms/RightSide';

const ContactMainContainer = styled.div`
  padding: 40px;
  background-color: ${Grey010};
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (min-width: 1400px) {
    padding: 80px 130px;
  }
`;

const ContentContainer = styled.div`
padding-top: 30px;

@media screen and (min-width: 1200px) {
    padding-top: 72px;
    display: grid;
    grid-template-columns: 1fr 580px;
    column-gap: 220px;
  }
`;

const Contact = () => (
  <>
    <NavBar backgroundColor={Grey010} />
    <BackgroundWrapper>
      <ContactMainContainer>
        <HeaderWithSocialLinks title="Elérhetőségek" breakPoint={768} />
        <ContentContainer>
          <ReservationInfo />
          <RightSide />
        </ContentContainer>
      </ContactMainContainer>
    </BackgroundWrapper>
  </>
);

export default Contact;
