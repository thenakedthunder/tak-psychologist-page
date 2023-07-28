import LocationDetails, { LocationDetailsContent } from 'components/Contact/molecules/LocationDetails';
import ContactDetails, { ContactDetailsContent } from 'components/Contact/molecules/ContactDetails';

interface Props {
  locationDetails: LocationDetailsContent;
  contactDetails: ContactDetailsContent;
}

const ContactFooter = ({ locationDetails, contactDetails }: Props) => (
  <>
    <LocationDetails
      details={locationDetails}
    />
    <ContactDetails
      details={contactDetails}
    />
  </>
);

export default ContactFooter;
