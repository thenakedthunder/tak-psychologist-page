import styled from 'styled-components';

import { Grey010, Green050 } from 'components/styling/colors';
import NavBar from 'components/NavBar/organisms/NavBar';
import ImageSlider from 'components/Contact/molecules/ImageSlider';
import ContactFooter from 'components/Contact/organisms/ContactFooter';
import ReservationInfo from 'components/Contact/organisms/ReservationInfo';
import HeaderWithSocialLinks from 'components/molecules/HeaderWithSocialLinks';
import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import SubHeader from 'components/Contact/atoms/SubHeader';

const MainContainer = styled.div`
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
    <NavBar />
    <BackgroundWrapper color={Grey010}>
      <MainContainer>
        <HeaderWithSocialLinks title="Elérhetőségek" breakPoint={768} />
        <ContentContainer>
          <ReservationInfo />
          <div>
            <SubHeader color={Green050}>
              A konzultációk helyszíne
            </SubHeader>
            <ImageSlider />
            <ContactFooter />
          </div>
        </ContentContainer>
      </MainContainer>
    </BackgroundWrapper>
  </>
);

export default Contact;
