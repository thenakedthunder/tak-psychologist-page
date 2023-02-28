import styled from 'styled-components';

import {
  Grey010,
} from 'components/styling/colors';
import NavBar from 'components/NavBar/organisms/NavBar';
import ImageSlider from 'components/Contact/molecules/ImageSlider';
import ContactFooter from 'components/Contact/organisms/ContactFooter';
import ReservationInfo from 'components/Contact/organisms/ReservationInfo';

const MainContainer = styled.div`
  padding: 40px;
  background-color: ${Grey010};
`;

const Contact = () => (
  <>
    <NavBar />
    <MainContainer>
      <ReservationInfo />
      <ImageSlider />
      <ContactFooter />
    </MainContainer>
  </>
);

export default Contact;
