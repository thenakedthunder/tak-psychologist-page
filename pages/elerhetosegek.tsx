import styled from 'styled-components';

import {
  DefaultParagraph, H2, LargeParagraph, SmallParagraph,
} from 'components/atoms/typography.styles';
import {
  Green010, Green050, Green100, Grey010,
} from 'components/styling/colors';
import NavBar from 'components/NavBar/organisms/NavBar';
import ImageSlider from 'components/Contact/molecules/ImageSlider';
import PsychoLink from 'components/atoms/PsychoLink';
import { ReservationInfo, FooterInfo } from 'components/Contact/content/contactContent';

const MainContainer = styled.div`
  padding: 40px;
  background-color: ${Grey010};
`;

const Header = styled(H2)`
  padding-bottom: 30px;
`;

const SubHeader = styled(LargeParagraph)`
  padding-bottom: 20px;
`;

const BulletedInfoContainer = styled.div`
  padding: 30px 0 40px;
  display: grid;
  row-gap: 30px;
`;

const BulletedInfo = styled.div`
  display: grid;
  grid-template-columns: 16px auto;
  column-gap: 16px;
`;

const BulletPoint = styled.div`
  width: 16px;
  height: 16px;

  background-color: ${Green010};
  border-radius: 50%;
`;

const Location = styled.div`
  padding: 16px 0 20px;

  a {
    text-decoration: underline
  }
`;

const ContactDetails = styled.div`
  a {
    text-decoration: underline
  }
`;

const BolderText = styled(SmallParagraph)`
  font-weight: 700;
`;

const Contact = () => (
  <>
    <NavBar />
    <MainContainer>
      <Header color={Green100}>
        Elérhetőségek
      </Header>
      <SubHeader color={Green050}>
        Bejelentkezési információk
      </SubHeader>
      {ReservationInfo.highlightedParagraphs.map((item, index) => (
        <DefaultParagraph key={index} color={Green050}>
          {item}
        </DefaultParagraph>
      ))}
      <BulletedInfoContainer>
        {ReservationInfo.listedParagraphs.map((item, index) => (
          <BulletedInfo key={index}>
            <BulletPoint />
            <SmallParagraph color={Green050}>
              {item}
            </SmallParagraph>
          </BulletedInfo>
        ))}
      </BulletedInfoContainer>
      <SubHeader color={Green050}>
        A konzultációk helyszíne
      </SubHeader>
      <ImageSlider />
      <Location>
        <BolderText color={Green050}>Szervezet neve</BolderText>
        <SmallParagraph color={Green050}>
          {FooterInfo.address}
        </SmallParagraph>
        <SmallParagraph color={Green050}>
          <PsychoLink href="https://www.google.com/maps/place/Budapest,+Bart%C3%B3k+B%C3%A9la+%C3%BAt+12-em.+13,+1111/@47.4822872,19.0529605,17z/data=!4m5!3m4!1s0x4741dc4d9518da53:0x6bccd46420204e21!8m2!3d47.4822872!4d19.0529605">
            Mutasd térképen
          </PsychoLink>
        </SmallParagraph>
      </Location>
      <ContactDetails>
        <BolderText color={Green050}>Elérhetőség</BolderText>
        <SmallParagraph color={Green050}>
          <PsychoLink href="mailto:Rendelo@mail.hu">
            {FooterInfo.email}
          </PsychoLink>
        </SmallParagraph>
        <SmallParagraph color={Green050}>
          {FooterInfo.phone}
        </SmallParagraph>
      </ContactDetails>
    </MainContainer>
  </>
);

export default Contact;
