import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { Green010, Green100 } from 'components/styling/colors';
import { WrapperForCollageBackground, FooterContainer, FooterHeader } from 'components/Footer/Footer.styles';
import Form from 'components/Footer/Form/Form';
import LeftInformationDiv from 'components/Footer/organisms/LeftInformationDiv';
import footerContent from 'components/Footer/content/footerContents';
import { FooterDocumentData, Simplify } from 'prismicio-types';
import { PrismicDocument } from '@prismicio/client';

interface FooterProps {
  footerContentFromCMS?: FooterDocumentData;
}

const Footer = ({ footerContentFromCMS }: FooterProps) => {
  console.log(footerContentFromCMS);
  return (
    <BackgroundWrapper backgroundColor={Green010}>
      <WrapperForCollageBackground>
        <FooterContainer>
          <FooterHeader textColor={Green100}>{footerContentFromCMS?.main_header ?? 'FOS'}</FooterHeader>
          <LeftInformationDiv content={footerContent} />
          <Form />
        </FooterContainer>
      </WrapperForCollageBackground>
    </BackgroundWrapper>
  );
};

export default Footer;
