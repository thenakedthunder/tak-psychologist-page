import { GroupField } from '@prismicio/client';

import ImageSlider from 'components/Contact/molecules/ImageSlider';
import ContactFooter from 'components/Contact/organisms/ContactFooter';
import SubHeader from 'components/Contact/atoms/SubHeader';
import { Green050 } from 'components/styling/colors';
import { ContactPageDocumentDataPicsItem, Simplify } from 'prismicio-types';
import { LocationDetailsContent } from 'components/Contact/molecules/LocationDetails';
import { ContactDetailsContent } from 'components/Contact/molecules/ContactDetails';

interface Props {
  subHeader: string;
  images: GroupField<Simplify<ContactPageDocumentDataPicsItem>>;
  locationDetails: LocationDetailsContent;
  contactDetails: ContactDetailsContent;
}

const RightSide = ({
  subHeader, images, locationDetails, contactDetails,
}: Props) => (
  <div>
    <SubHeader textColor={Green050}>
      {subHeader}
    </SubHeader>
    <ImageSlider images={images} />
    <ContactFooter
      locationDetails={locationDetails}
      contactDetails={contactDetails}
    />
  </div>
);

export default RightSide;
