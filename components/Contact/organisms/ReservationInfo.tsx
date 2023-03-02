import { SubHeader } from 'components/Contact/atoms/atoms';
import { Green050 } from 'components/styling/colors';
import { reservationInfoContent } from 'components/Contact/content/contactContent';
import { DefaultParagraph } from 'components/atoms/typography.styles';
import BulletedInfo from 'components/Contact/molecules/BulletedInfo';

const ReservationInfo = () => (
  <>
    <SubHeader color={Green050}>
      Bejelentkezési információk
    </SubHeader>
    {
      reservationInfoContent.highlightedParagraphs.map((item, index) => (
        <DefaultParagraph key={index} color={Green050}>
          {item}
        </DefaultParagraph>
      ))
    }
    <BulletedInfo />
  </>
);

export default ReservationInfo;
