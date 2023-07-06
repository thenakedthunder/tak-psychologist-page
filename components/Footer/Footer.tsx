import { FooterDocumentData, SelectSlice } from 'prismicio-types';
import { SliceZone } from '@prismicio/client';

import BackgroundWrapper from 'components/styling/BackgroundWrapper';
import { Green010, Green100 } from 'components/styling/colors';
import { WrapperForCollageBackground, FooterContainer, FooterHeader } from 'components/Footer/Footer.styles';
import Form from 'components/Footer/Form/Form';
import LeftInformationDiv, { LeftInformationContentType } from 'components/Footer/organisms/LeftInformationDiv';

interface FooterProps {
  footerContent: FooterDocumentData;
}

const Footer = ({ footerContent }: FooterProps) => (
  <BackgroundWrapper backgroundColor={Green010}>
    <WrapperForCollageBackground>
      <FooterContainer>
        <FooterHeader textColor={Green100}>{footerContent?.main_header}</FooterHeader>
        <LeftInformationDiv
          content={footerContent.slices.filter((slice) => slice.slice_type !== 'select') as SliceZone<LeftInformationContentType>}
          name={footerContent?.name}
          professionalTitle={footerContent?.professional_title}
        />
        <Form
          email={
            {
              placeholder: footerContent.email_placeholder,
              errorText: footerContent.email_field_error_message,
            }
          }
          message={
            {
              placeholder: footerContent.message_placeholder,
              errorText: footerContent.message_field_error_message,
            }
          }
          name={
            {
              placeholder: footerContent.name_placeholder,
              errorText: footerContent.name_field_error_message,
            }
          }
          phone={
            {
              placeholder: footerContent.phone_placeholder ?? '',
            }
          }
          serviceSelectionValues={
            {
              placeHolder: footerContent.service_placeholder,
              values: footerContent.slices.filter((slice) => slice.slice_type === 'select') as SliceZone<SelectSlice>,
            }
          }
          checkBox={
            {
              statement: footerContent.checkbox_statement,
              error: footerContent.checkbox_error,
            }
          }
          buttonText={footerContent.send_button_text}
        />
      </FooterContainer>
    </WrapperForCollageBackground>
  </BackgroundWrapper>
);

export default Footer;
