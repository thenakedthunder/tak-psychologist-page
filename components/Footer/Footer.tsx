import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { Green010, Green100 } from 'components/styling/colors';
import { WrapperForCollageBackground, FooterContainer, FooterHeader } from 'components/Footer/Footer.styles';
import Form from 'components/Footer/Form/Form';
import LeftInformationDiv from 'components/Footer/organisms/LeftInformationDiv';

const Footer = () => (
  <BackgroundWrapper color={Green010}>
    <WrapperForCollageBackground>
      <FooterContainer>
        <FooterHeader color={Green100}>Űrlap</FooterHeader>
        <LeftInformationDiv />
        <Form />
      </FooterContainer>
    </WrapperForCollageBackground>
  </BackgroundWrapper>
);

export default Footer;
